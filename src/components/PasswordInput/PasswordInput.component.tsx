import React, { useState } from 'react';
import * as Styled from './PasswordInput.styles';
import { InputProps } from '../Input/Input.component';
import Icon from '../Icon';
import Input from '../Input';
import { theme } from '../../config';
import { FieldProps } from '../../helpers/FieldProps';
import useField from '../../hooks/useField';

/**
 * @name PasswordInput
 *
 * Password molecule contains of input atom and icons
 *
 * @returns {JSX}
 */

type ValueOnChange = (event: React.ChangeEvent<HTMLInputElement>) => void;

export type PasswordInputProps = FieldProps<string, ValueOnChange> & {
  error?: string;
} & InputProps;

function handleCapsLock(e: React.KeyboardEvent<HTMLInputElement>): boolean {
  //Take char on keypress
  const s = String.fromCharCode(e.which);

  //Check if it is uppercased
  if (s.toUpperCase() === s && s.toLowerCase() !== s && !e.shiftKey) {
    return true;
  } else {
    return false;
  }
}

const PasswordInput: React.FC<PasswordInputProps> = (
  props: PasswordInputProps
): JSX.Element => {
  const { error, label, dirty, touched, ...rest } = props;
  const [inputType, setInputType] = useState<string>('password');
  const [capslook, setCapslook] = useState<boolean>(false);
  const showError = useField(props);
  const showErrorMsg = showError && error !== 'rule-error';

  return (
    <Styled.Container>
      {label && <label>{label}</label>}
      <Styled.InputWrapper>
        <Input
          type={inputType}
          error={showError}
          {...rest}
          onHandleCapsLock={(e: React.KeyboardEvent<HTMLInputElement>) => {
            setCapslook(handleCapsLock(e));
          }}
        />
        <div
          onClick={() => {
            if (inputType === 'password') {
              setInputType('text');
            } else {
              setInputType('password');
            }
          }}
        >
          {inputType === 'password' ? (
            <Styled.EyeIconWrapper>
              <Icon name="eye" color={theme.pallet.DISABLED} />
            </Styled.EyeIconWrapper>
          ) : (
            <Styled.EyeIconWrapper>
              <Icon name="eye-slash" color={theme.pallet.DISABLED} />
            </Styled.EyeIconWrapper>
          )}
        </div>
        {capslook && (
          <Styled.CapslookIconWrapper>
            <Icon name="caps-lock" color={theme.pallet.GRAY} />
          </Styled.CapslookIconWrapper>
        )}
      </Styled.InputWrapper>
      {showErrorMsg}
    </Styled.Container>
  );
};

export default PasswordInput as React.FC<PasswordInputProps>;
