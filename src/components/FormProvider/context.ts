import React, { ReactNode } from 'react';
import { FormState } from './reducer';

interface FormContext {
  fields: FormState;
  formValid: boolean;
  processingRequest: boolean;
  registerField: (name: string) => void;
  unregisterField: (name: string) => void;
  setProcessingRequest: (pr: boolean) => void;
  setFieldError: (name: string, error: ReactNode) => void;
  markAsDirty: (name: string) => void;
  markAsTouched: (name: string) => void;
  markAllAsDirtyAndTouched: () => void;
  reportFieldValidity: (name: string, valid: boolean) => void;
  updateValueField: (name: string, value: any) => void;
}

const noop = () => {};

const FormContext = React.createContext<FormContext>({
  fields: {},
  formValid: false,
  processingRequest: false,
  registerField: noop,
  unregisterField: noop,
  setProcessingRequest: noop,
  setFieldError: noop,
  markAsDirty: noop,
  markAsTouched: noop,
  markAllAsDirtyAndTouched: noop,
  reportFieldValidity: noop,
  updateValueField: noop,
});

export default FormContext;
