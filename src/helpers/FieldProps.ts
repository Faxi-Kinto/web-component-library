import { ReactNode } from 'react';

export type FieldProps<
  Value = any,
  OnChange = (value: Value) => void
> = Partial<{
  name: string;
  value: Value;
  dirty: boolean;
  touched: boolean;
  error: ReactNode;
  onChange: OnChange;
  onBlur: () => void;
}>;
