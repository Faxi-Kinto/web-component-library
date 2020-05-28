import React, {
  ReactElement,
  useMemo,
  useContext,
  useEffect,
  ChangeEvent,
} from 'react';
import FormContext from 'store/FormProvider/context';
import { FormState } from 'store/FormProvider/reducer';
import { FieldProps } from './FieldProps';

/**
 * @name FormField
 *
 * [Insert omponent description]
 *
 * @returns {JSX}
 */

export type ValidationFn<T = any> = (
  value: T,
  fields: FormState
) => React.ReactNode | undefined;

export type FormFieldProps<T> = {
  name: string;
  validate?: ValidationFn | ValidationFn[];
  component: React.FC<T> | ReactElement;
} & T;

type Primitive = string | number | boolean;

function FormField<T extends FieldProps>(props: FormFieldProps<T>) {
  const { name, component, validate, ...rest } = props;
  const {
    fields,
    registerField,
    unregisterField,
    updateValueField,
    reportFieldValidity,
    markAsDirty,
    markAsTouched,
  } = useContext(FormContext);

  /** firstly we register fields in the current form */

  useEffect(() => {
    registerField(name);
    return () => {
      unregisterField(name);
    };
  }, [registerField, unregisterField, name]);

  const field = useMemo(() => fields[name] || {}, [fields, name]);
  const { value = '', dirty, touched, asyncError } = field;

  const error = useMemo(() => {
    if (validate) {
      if (Array.isArray(validate)) {
        for (const validateFn of validate) {
          const errorMessage = validateFn(value, fields);
          if (errorMessage) {
            return errorMessage;
          }
        }
      } else return validate(value, fields);
    }
    return '';
  }, [validate, value, fields]);

  useEffect(() => {
    reportFieldValidity(name, Boolean(!error) && Boolean(!asyncError));
  }, [reportFieldValidity, name, error, asyncError]);

  const formField = useMemo(() => {
    const props = {
      ...rest,
      name,
      value,
      error: error || asyncError,
      dirty,
      touched,
      onBlur: () => {
        markAsTouched(name);
      },
      onChange: (event: ChangeEvent<HTMLInputElement> | Primitive) => {
        let value;
        if (
          typeof event === 'number' ||
          typeof event === 'boolean' ||
          typeof event === 'string' ||
          (!event.target && typeof event === 'object')
        ) {
          value = event;
        } else {
          if (event.target.checked !== undefined) {
            value = event.target.checked;
          } else {
            value = event.target.value;
          }
        }
        markAsDirty(name);
        updateValueField(name, value);
      },
    };

    if (typeof component === 'object') {
      return React.cloneElement(component, props);
    } else {
      const Component = component;
      return <Component {...((props as any) as T)} />;
    }
  }, [
    value,
    dirty,
    error,
    name,
    rest,
    touched,
    updateValueField,
    component,
    markAsDirty,
    markAsTouched,
    asyncError,
  ]);

  return formField;
}

export default FormField;
