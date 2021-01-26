import React, { useState, ChangeEvent } from 'react';
import * as Styled from './TextArea.styles';
import Label from '../Label';
import classNames from 'classnames';

/**
 * @name TextArea
 *
 * @returns {JSX}
 */

export type TextAreaProps = {
  autoFocus?: boolean;
  className?: string;
  error?: boolean;
  horizontalResize?: boolean;
  id?: string;
  label?: string;
  maxLength?: number;
  name?: string;
  noresize?: boolean;
  placeholder?: string;
  rows?: number;
  value?: string;
  verticalResize?: boolean;
  onChange?: (value: string) => void;
};

const TextArea: React.FC<TextAreaProps> = (
  props: TextAreaProps
): JSX.Element => {
  const {
    autoFocus,
    className,
    error = false,
    horizontalResize = false,
    id,
    label,
    maxLength,
    name,
    noresize = false,
    placeholder,
    rows,
    value,
    verticalResize = false,
    onChange,
    ...rest
  } = props;
  const [inputValue, setTextAreaValue] = useState<string>('');

  const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    if (onChange) {
      onChange(event.target.value);
    } else {
      setTextAreaValue(event.target.value);
    }
  };

  return (
    <Styled.TextAreaStyled>
      {label && <Label htmlFor={id || name}>{label}</Label>}
      <textarea
        {...rest}
        id={id || name}
        name={name}
        className={classNames([
          'textarea',
          { 'textarea--error': error },
          { 'textarea--noresize': noresize },
          { 'textarea--horizontal-resize': horizontalResize },
          { 'textarea--vertical-resize': verticalResize },
          className,
        ])}
        value={value || inputValue}
        placeholder={placeholder}
        autoFocus={autoFocus}
        onChange={handleOnChange}
        maxLength={maxLength}
        rows={rows}
      />
    </Styled.TextAreaStyled>
  );
};

export default TextArea;
