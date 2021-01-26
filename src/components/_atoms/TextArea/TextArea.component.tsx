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
  noresize?: boolean;
  verticalResize?: boolean;
  horizontalResize?: boolean;
  maxLength?: number;
  rows?: number;
  id?: string;
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
    noresize = false,
    verticalResize = false,
    horizontalResize = false,
    maxLength,
    rows,
    id,
    ...rest
  } = props;
  const [inputValue, setTextAreaValue] = useState<string>('');

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
        {...ID}
        {...rest}
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
