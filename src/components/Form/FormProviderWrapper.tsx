import React, { forwardRef } from 'react';
import Form from './Form.component';
import { FormRef, FormProps } from './Form.component';
import FormProvider from '../FormProvider';

const FormWithRef = forwardRef(Form);

const FormWrapper: React.RefForwardingComponent<FormRef, FormProps> = (
  props,
  ref
) => (
  <FormProvider>
    <FormWithRef ref={ref} {...props} />
  </FormProvider>
);

export default forwardRef(FormWrapper);
