import React, { useState, ChangeEvent, useMemo } from 'react';
import * as Styled from './TextArea.styles';
import Label from '../Label';
import classNames from 'classnames';

/**
 * @name TextArea
 *
 * @returns {JSX}
 */

export type TextAreaProps = {
  name?: string;
  value?: string;
  placeholder?: string;
  label?: string;
  onChange?: (value: string) => void;
  error?: boolean;
  autoFocus?: boolean;
  className?: string;
};

const TextArea: React.FC<TextAreaProps> = (
  props: TextAreaProps
): JSX.Element => {
  const {
    name,
    value,
    placeholder,
    label,
    onChange,
    error = false,
    autoFocus,
    className,
    ...rest
  } = props;
  const [inputValue, setTextAreaValue] = useState<string>('');

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

  const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    if (onChange) {
      onChange(event.target.value);
    } else {
      setTextAreaValue(event.target.value);
    }
  };

  return (
    <Styled.TextAreaStyled>
      {label && <Label {...htmlFor}>{label}</Label>}
      <textarea
        {...id}
        {...rest}
        className={classNames([
          'textarea',
          { 'textarea--error': error },
          className,
        ])}
        value={value || inputValue}
        placeholder={placeholder}
        autoFocus={autoFocus}
        onChange={handleOnChange}
      />
    </Styled.TextAreaStyled>
  );
};

export default TextArea;
