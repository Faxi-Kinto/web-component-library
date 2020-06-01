import React, {
  useReducer,
  useCallback,
  useState,
  useEffect,
  ReactNode,
  useContext,
  useRef,
} from 'react';
import FormContext from './context';
import formReducer, { FormField } from './reducer';
import actions from './actions';
import { StepsContext } from '../StepsProvider/context';
import { FORM_STORAGE_KEY } from '../StepsProvider/Steps.provider';
import StorageService from '../../services/StorageService';

// TODO add support for nested fields
const createField = (name: string, value: any = ''): FormField => ({
  name,
  dirty: false,
  touched: false,
  value,
  valid: false,
  asyncError: '',
});

const FormProvider: React.FC = (props) => {
  const { children } = props;

  const isFirstRun = useRef(true);
  const { formData, invalidateStep } = useContext(StepsContext);
  const [fields, dispatch] = useReducer(formReducer, {});
  const [formValid, setFormValid] = useState(false);
  const [processingRequest, setProcessingRequest] = useState(false);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    /** On every form invalidation lower number of completed steps */
    if (!formValid) {
      invalidateStep();
    }
  }, [formValid, invalidateStep]);

  const registerField = useCallback(
    (name: string) => {
      dispatch(actions.registerField(createField(name, formData[name])));
    },
    [formData]
  );

  const unregisterField = useCallback((name: string) => {
    dispatch(actions.unregisterField(name));
  }, []);

  useEffect(() => {
    const fieldArray = Object.values(fields);
    if (fieldArray.length) {
      const newFormValid = fieldArray.every((f) => f.valid);
      setFormValid(newFormValid);
    }
  }, [fields]);

  const markAsDirty = useCallback(
    (name: string) => {
      const existingField = fields[name];
      if (existingField && !existingField.dirty) {
        dispatch(
          actions.updateField({
            name,
            dirty: true,
          })
        );
      }
    },
    [fields]
  );

  const markAsTouched = useCallback(
    (name: string) => {
      const existingField = fields[name];
      if (existingField && !existingField.touched) {
        dispatch(
          actions.updateField({
            name,
            touched: true,
          })
        );
      }
    },
    [fields]
  );

  const markAllAsDirtyAndTouched = useCallback(() => {
    dispatch(
      actions.updateAllFields({
        dirty: true,
        touched: true,
      })
    );
  }, []);

  const reportFieldValidity = useCallback(
    (name: string, valid: boolean) => {
      const existingField = fields[name];
      if (existingField && existingField.valid !== valid) {
        dispatch(
          actions.updateField({
            name,
            valid,
          })
        );
      }
    },
    [fields]
  );

  const setFieldError = useCallback(
    (name: string, error: ReactNode) => {
      const existingField = fields[name];
      if (existingField && existingField.asyncError !== error) {
        dispatch(
          actions.updateField({
            name,
            valid: false,
            asyncError: error,
          })
        );
      }
    },
    [fields]
  );

  const updateLocalStorage = useCallback((name: string, value: any) => {
    const currentData: Record<string, any> =
      StorageService.getItem(FORM_STORAGE_KEY) || {};
    currentData[name] = value;
    StorageService.setItem(FORM_STORAGE_KEY, currentData);
  }, []);

  const updateValueField = useCallback(
    (name: string, value: any) => {
      const existingField = fields[name];
      if (existingField) {
        dispatch(
          actions.updateField({
            name,
            value,
            asyncError: '',
          })
        );

        /** update storage on field value update */
        updateLocalStorage(name, value);
      }
    },
    [fields, updateLocalStorage]
  );

  return (
    <FormContext.Provider
      value={{
        fields,
        formValid,
        processingRequest,
        registerField,
        unregisterField,
        setProcessingRequest,
        setFieldError,
        markAsDirty,
        markAsTouched,
        markAllAsDirtyAndTouched,
        reportFieldValidity,
        updateValueField,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
