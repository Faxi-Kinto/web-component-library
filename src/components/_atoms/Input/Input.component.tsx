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
  autoFocus?: boolean;
  autoComplete?: 'on' | 'off';
  className?: string;
  disabled?: boolean;
  error?: boolean;
  id?: string;
  label?: string;
  name?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (value: string) => void;
  onClick?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
};

const Input: React.FC<InputProps> = (props: InputProps) => {
  const {
    autoFocus,
    autoComplete,
    className,
    disabled = false,
    error = false,
    id,
    label,
    name,
    placeholder,
    type = 'text',
    value,
    onChange,
    onClick,
    onFocus,
    onBlur,
    ...rest
  } = props;
  const [inputValue, setInputValue] = useState<string>('');

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

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (onChange) {
      onChange(event.target.value);
    } else {
      setInputValue(event.target.value);
    }
  };

  return (
    <Styled.InputContainer>
      {label && <Label {...htmlFor}>{label}</Label>}
      <input
        autoFocus={autoFocus}
        autoComplete={autoComplete}
        className={classNames([
          'input',
          { 'input--error': error },
          { 'input--disabled': disabled },
          className,
        ])}
        disabled={disabled}
        {...ID}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value || inputValue}
        onClick={onClick}
        onChange={handleOnChange}
        onFocus={onFocus}
        onBlur={onBlur}
        {...rest}
      />
    </Styled.InputContainer>
  );
};

export default Input;
