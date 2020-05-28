import React from 'react';
import Form from '.';
import FormField from 'components/molecules/FormField';
import InputField from 'components/molecules/InputField/InputField.component';
import validators from 'store/FormProvider/validators';
import useCallbackRef from 'hooks/useCallbackRef';
import { FormRef } from './Form.component';
import { action } from '@storybook/addon-actions';
import DropdownList from 'components/molecules/DropdownList';
import NumberField from 'components/molecules/NumberField';
import RadioGroup from 'components/molecules/RadioGroup';
import CheckboxField from 'components/molecules/CheckboxField';
import styled from 'styled-components';
import { flexColumn } from 'styles/flex';

const ListView = styled.div`
  ${flexColumn('initial', 'stretch')};
  max-width: 500px;

  > :not(:first-child),
  & + button[type='submit'] {
    margin-top: 32px;
  }
`;

const DefaultForm = () => (
  <Form
    onSubmit={data => {
      console.log(data);
      action('Successful submit')(data);
    }}
  >
    <ListView>
      <FormField
        name="firstName"
        component={InputField}
        placeholder="First name"
        validate={[
          validators.general.required('Please fill in this field'),
          validators.general.minLength(5, 'Length must be at least 5'),
        ]}
      />
      <FormField
        name="lastName"
        component={InputField}
        placeholder="Last name"
        description="This will be your last name"
        validate={validators.general.required('Please fill in this field')}
      />
      <FormField
        name="radiotest"
        component={RadioGroup}
        options={[
          { label: 'School', value: 'sr' },
          { label: 'Work', value: 'wo' },
          { label: 'Training', value: 'tr' },
        ]}
      />

      <FormField
        name="choice"
        component={DropdownList}
        placeholder="Make a choice"
        list={[
          {
            value: 'one',
            label: 'Choice 1',
          },
          {
            value: 'two',
            label: 'Choice 2',
          },
        ]}
        validate={validators.general.required('Please fill in this field')}
      />
      <FormField
        name="phonenumber"
        component={NumberField}
        list={[
          {
            value: '00381',
            label: '+381',
          },
          {
            value: '0044',
            label: '+44',
          },
        ]}
        validate={[
          validators.phone.phoneNumberUndefined('Please enter number'),
        ]}
      />
      <FormField
        name="agree"
        component={CheckboxField}
        label="I agree"
        validate={validators.general.required(
          'You must agree in order to continue'
        )}
      />
    </ListView>
  </Form>
);

const FormWithAsyncError = () => {
  const [form, setFormRef] = useCallbackRef<FormRef>();

  const mockApiCall = (data: any) => {
    return new Promise<{
      errors: object;
    }>(resolve => {
      let errors: { [key: string]: string };
      if (!/^.+@.+$/.test(data.email)) {
        errors = {};
        errors['email'] = 'Email address appears incorrect';
      }

      setTimeout(
        () =>
          resolve({
            errors,
          }),
        250
      );
    });
  };

  return (
    <Form
      ref={setFormRef}
      onSubmit={async data => {
        const { errors } = await mockApiCall(data);
        if (errors) {
          Object.entries(errors).forEach(([name, error]) => {
            form.setFieldError(name, error);
          });

          action('Failed submit')(errors);
          return;
        }
        action('Successful submit')(data);
        console.log('Data to submit:', data);
      }}
    >
      <ListView>
        <FormField
          name="email"
          component={InputField}
          placeholder="Email Address"
          validate={validators.general.required('Please fill in this field')}
        />
        <FormField
          name="firstName"
          component={InputField}
          placeholder="First name"
          validate={validators.general.required('Please fill in this field')}
        />
        <FormField
          name="agree"
          component={CheckboxField}
          label="I agree"
          validate={validators.general.required(
            'You must agree in order to continue'
          )}
        />
      </ListView>
    </Form>
  );
};

const Examples = {
  ListView,
  DefaultForm,
  FormWithAsyncError,
};

export default Examples;
