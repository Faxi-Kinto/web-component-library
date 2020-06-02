import {
  REGISTER_FIELD,
  UPDATE_FIELD,
  UPDATE_ALL_FIELDS,
  UNREGISTER_FIELD,
} from './types';
import { FormField } from './reducer';

export type RegisterField = {
  type: string;
  payload: FormField;
};

export type UnregisterField = {
  type: string;
  payload: string;
};

type AtLeast<T, K extends keyof T> = Partial<T> & Pick<T, K>;
export type FormFieldWithName = AtLeast<FormField, 'name'>;

export type UpdateField = {
  type: string;
  payload: FormFieldWithName;
};

export type UpdateAllFields = {
  type: string;
  payload: Partial<FormField>;
};

export function registerField(payload: FormField): RegisterField {
  return {
    type: REGISTER_FIELD,
    payload,
  };
}

export function unregisterField(payload: string): UnregisterField {
  return {
    type: UNREGISTER_FIELD,
    payload,
  };
}

export function updateField(payload: FormFieldWithName): UpdateField {
  return {
    type: UPDATE_FIELD,
    payload,
  };
}

export function updateAllFields(payload: Partial<FormField>): UpdateAllFields {
  return {
    type: UPDATE_ALL_FIELDS,
    payload,
  };
}

export type FormActions =
  | RegisterField
  | UnregisterField
  | UpdateField
  | UpdateAllFields;

export default {
  registerField,
  unregisterField,
  updateField,
  updateAllFields,
};
