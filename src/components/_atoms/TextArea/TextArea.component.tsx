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
        autoFocus={autoFocus}
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
        maxLength={maxLength}
        placeholder={placeholder}
        rows={rows}
        value={value || inputValue}
        {...id}
        {...rest}
        onChange={handleOnChange}
      />
    </Styled.TextAreaStyled>
  );
};

export default TextArea;
