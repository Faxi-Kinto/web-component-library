import React from 'react';
import * as Styled from './RadioField.styles';
import Text from '../Text';
import RadioSVG from './RadioSVG';

export type SizeType = 'md' | 'lg';
export type RadioFieldProps = {
  value: string;
  name: string;
  label?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  size?: SizeType;
  className?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
};

const RadioField: React.FC<RadioFieldProps> = (
  props: RadioFieldProps
): JSX.Element => {
  const {
    label,
    name,
    disabled,
    checked,
    size,
    value,
    onChange,
    className,
    inputRef,
  } = props;

  return (
    <Styled.Container className={className}>
      <input
        ref={inputRef}
        className="radio-input"
        type="radio"
        name={name}
        disabled={disabled}
        checked={checked}
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
          onChange && onChange(event);
        }}
      />
      <RadioSVG className={size} />
      <Text.Body>{label}</Text.Body>
    </Styled.Container>
  );
};

RadioField.defaultProps = {
  disabled: false,
  size: 'lg',
};

export default RadioField;
