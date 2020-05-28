import React from 'react';
import * as Styled from './InputField.styles';
import { FieldProps } from 'components/molecules/FormField/FieldProps';
import Input, { InputProps } from 'components/atoms/Input/Input.component';
import useField from 'hooks/useField';

/**
 * @name InputField
 *
 * [Insert omponent description]
 *
 * @returns {JSX}
 */
type ValueOnChange = (event: React.ChangeEvent<HTMLInputElement>) => void;

export type InputFieldProps = FieldProps<string, ValueOnChange> & {
  description?: string;
} & InputProps;

const InputField: React.FC<InputFieldProps> = (
  props: InputFieldProps
): JSX.Element => {
  const { error, description, dirty, touched, ...rest } = props;

  const showError = useField(props);
  return (
    <Styled.Container>
      <Input error={showError} {...rest} />
      {description ? (
        <div className="input__description-msg">{description}</div>
      ) : (
        ''
      )}
      {showError ? <div className="input__error-msg">{error}</div> : ''}
    </Styled.Container>
  );
};

export default InputField;
