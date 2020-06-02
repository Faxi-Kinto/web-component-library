import { useMemo } from 'react';
import { FieldProps } from '../helpers/FieldProps';

export default function useField(props: FieldProps) {
  const { dirty, touched, error } = props;
  const showError = useMemo(() => dirty && touched && !!error, [
    dirty,
    touched,
    error,
  ]);
  return showError;
}
