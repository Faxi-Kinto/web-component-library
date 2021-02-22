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
  onHandleCapsLock?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref) => {
    const {
      autoFocus,
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
      onHandleCapsLock,
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
          autoFocus={autoFocus}
          ref={ref}
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
          value={currentValue || inputValue}
          onChange={handleOnChange}
          onKeyPress={(event: React.KeyboardEvent<HTMLInputElement>) =>
            checkCapsLockStatus(event)
          }
          {...rest}
        />
      </Styled.InputContainer>
    );
  }
);

export default Input;
