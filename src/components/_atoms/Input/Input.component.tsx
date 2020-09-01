import React, { useState, ChangeEvent, useMemo } from 'react';
import * as Styled from './Input.styles';
import Label from '../Label';
import classNames from 'classnames';

/**
 * @name Input
 *
 * @returns {JSX}
 */

export type InputProps = {
  name?: string;
  value?: string;
  placeholder?: string;
  label?: string;
  onChange?: (value: string) => void;
  error?: boolean;
  type?: string;
  onHandleCapsLock?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
  className?: string;
};

const Input: React.FC<InputProps> = (props: InputProps): JSX.Element => {
  const {
    name,
    value,
    placeholder,
    label,
    onChange,
    error = false,
    type = 'text',
    onHandleCapsLock,
    autoFocus,
    className,
    ...rest
  } = props;
  const [inputValue, setInputValue] = useState<string>('');

  const currentValue = onHandleCapsLock ? value?.replace(/\s/g, '') : value;

  const htmlFor = useMemo(() => {
    if (name)
      return {
        htmlFor: name,
      };
    return {};
  }, [name]);

  const id = useMemo(() => {
    if (name)
      return {
        id: name,
        name,
      };
    return {};
  }, [name]);

  const checkCapsLockStatus = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (onHandleCapsLock) {
      onHandleCapsLock(event);
    }
  };

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (onChange) {
      onChange(event.target.value);
    } else if (onHandleCapsLock) {
      setInputValue(event.target.value.replace(/\s/g, ''));
    } else {
      setInputValue(event.target.value);
    }
  };

  return (
    <Styled.InputContainer>
      {label && <Label {...htmlFor}>{label}</Label>}
      <input
        {...id}
        {...rest}
        className={classNames(['input', { 'input--error': error }, className])}
        type={type}
        value={currentValue || inputValue}
        placeholder={placeholder}
        autoFocus={autoFocus}
        onChange={handleOnChange}
        onKeyPress={(event: React.KeyboardEvent<HTMLInputElement>) =>
          checkCapsLockStatus(event)
        }
      />
    </Styled.InputContainer>
  );
};

export default Input;
