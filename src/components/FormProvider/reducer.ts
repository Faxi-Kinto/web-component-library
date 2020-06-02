import { FormActions, FormFieldWithName } from './actions';
import {
  REGISTER_FIELD,
  UPDATE_FIELD,
  UPDATE_ALL_FIELDS,
  UNREGISTER_FIELD,
} from './types';
import { ReactNode } from 'react';
import cloneDeep from 'lodash.clonedeep';

export interface FormField {
  name: string;
  value: any;
  dirty: boolean;
  touched: boolean;
  valid: boolean;
  asyncError: ReactNode;
}

export type FormState = { [formFieldName: string]: FormField };

function formReducer(
  oldState: FormState,
  { type, payload }: FormActions
): FormState {
  switch (type) {
    case REGISTER_FIELD:
      const field = payload as FormField;
      return {
        ...oldState,
        [field.name]: field,
      };

    case UPDATE_FIELD: {
      if (typeof payload === 'string') return oldState;
      const key = (payload as FormFieldWithName).name;
      return {
        ...oldState,
        [key]: { ...oldState[key], ...payload },
      };
    }

    case UPDATE_ALL_FIELDS:
      const newState: FormState = cloneDeep(oldState);
      Object.values(newState).forEach(field => {
        (Object.keys(payload) as Array<keyof FormField>).forEach(
          <K extends keyof FormField>(key: K) => {
            field[key] = (payload as FormField)[key];
          }
        );
      });
      return newState;

    case UNREGISTER_FIELD: {
      const newState: FormState = cloneDeep(oldState);
      delete newState[payload as string];
      return newState;
    }

    default:
      return oldState;
  }
}

export default formReducer;
