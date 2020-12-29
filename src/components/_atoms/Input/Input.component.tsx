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
  disabled?: boolean;
  type?: string;
  onHandleCapsLock?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
  className?: string;
  id?: string;
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
    disabled = false,
    onHandleCapsLock,
    autoFocus,
    className,
    id,
    ...rest
  } = props;
  const [inputValue, setInputValue] = useState<string>('');

  const currentValue = onHandleCapsLock ? value?.replace(/\s/g, '') : value;

  const htmlFor = useMemo(() => {
    if (id)
      return {
        htmlFor: id,
      };
    else if (name)
      return {
        htmlFor: name,
      };
    return {};
  }, [id, name]);

  const ID = useMemo(() => {
    if (id)
      return {
        id: id,
      };
    else if (name)
      return {
        id: name,
      };
    return {};
  }, [id, name]);

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
        {...ID}
        {...rest}
        name={name}
        className={classNames([
          'input',
          { 'input--error': error },
          { 'input--disabled': disabled },
          className,
        ])}
        type={type}
        value={currentValue || inputValue}
        placeholder={placeholder}
        disabled={disabled}
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
