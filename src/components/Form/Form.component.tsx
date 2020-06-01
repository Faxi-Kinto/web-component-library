import React, {
  useContext,
  useImperativeHandle,
  ReactNode,
  useCallback,
} from 'react';
import { FormState } from '../FormProvider/reducer';
import { StepsContext } from '../StepsProvider/context';
import FormContext from '../FormProvider/context';
import Button from '../Button';
import { theme } from '../../config';
import Text from '../Text';
import * as Styled from './Form.styles';
import Icon from '../Icon';
import Spinner from '../Spinner';

/**
 * @name Form
 *
 * [Insert component description]
 *
 * @returns {JSX}
 */

export type FormProps<T = any> = {
  className?: string;
  onSubmit: (data: T) => void;
  children?: React.ReactNode;
};

export type FormRef = {
  formValid: boolean;
  fields: FormState;
  setProcessingRequest: (pr: boolean) => void;
  setFieldError: (name: string, error: ReactNode) => void;
};

const Form: React.RefForwardingComponent<FormRef, FormProps> = (
  props: FormProps,
  ref
): JSX.Element => {
  const { className, children, onSubmit } = props;
  const { steps, currentStep, previousPage } = useContext(StepsContext);

  const {
    fields,
    formValid,
    processingRequest,
    setProcessingRequest,
    markAllAsDirtyAndTouched,
    setFieldError,
  } = useContext(FormContext);

  useImperativeHandle(
    ref,
    () => ({
      fields,
      formValid,
      setProcessingRequest,
      setFieldError,
    }),
    [fields, formValid, setFieldError, setProcessingRequest]
  );

  const getData = useCallback(
    () =>
      Object.values(fields).reduce((acc: { [key: string]: any }, field) => {
        acc[field.name] = field.value;
        return acc;
      }, {}),
    [fields]
  );

  const handleSubmit: React.FormEventHandler = (ev) => {
    ev.preventDefault();

    markAllAsDirtyAndTouched();

    if (formValid) {
      const data = getData();
      onSubmit(data);
    } else {
      /** find first invalid field and focus it */
      const firstInvalidField = Object.values(fields).find(
        (field) => !field.valid
      );

      if (firstInvalidField) {
        requestAnimationFrame(() => {
          const input = document.querySelector<HTMLInputElement>(
            `input[name="${firstInvalidField.name}"]`
          );

          if (input) {
            input.focus();
            input.scrollIntoView({ behavior: 'smooth' });
          }
        });
      }
    }
  };

  const goBack = useCallback(() => previousPage(getData()), [
    previousPage,
    getData,
  ]);

  return (
    <Styled.FormContainer className={className} onSubmit={handleSubmit}>
      {children}
      <Button type="submit" className="continue-button">
        {processingRequest ? (
          <Spinner />
        ) : currentStep === 6 ? (
          'Complete'
        ) : (
          'Continue'
        )}
      </Button>
      {currentStep > 1 && (
        <Button secondary onClick={goBack}>
          <Icon name="chevron-left" color="#00708D" />
          <p>Back to {steps[currentStep - 2].handle}</p>
        </Button>
      )}
      <Text.Body fontSize="14px" color={theme.pallet.LIGHT_BLUE_2}>
        <Text.Emphasized color={theme.pallet.LIGHT_BLUE_2}>
          We’re here to help.
        </Text.Emphasized>
        &nbsp; Call&nbsp;
        <Text.Emphasized color={theme.pallet.LIGHT_BLUE_2}>
          0207 387 1133
        </Text.Emphasized>
        &nbsp; or email&nbsp;
        <Text.Emphasized color={theme.pallet.LIGHT_BLUE_2}>
          help@kinto-join.com
        </Text.Emphasized>
      </Text.Body>
    </Styled.FormContainer>
  );
};

export default Form;
