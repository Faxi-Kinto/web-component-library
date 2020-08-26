import React, { useState, ChangeEvent, useMemo, ReactNode } from 'react';
import * as Styled from './Checkbox.styles';
import Text from '../../_atoms/Text';

/**
 * @name Checkbox
 *
 * [Insert Component Description]
 *
 * @returns {JSX}
 */

type LabelPosition = 'left' | 'right';

export type CheckboxProps = {
  error?: boolean;
  name?: string;
  value?: boolean;
  label?: React.ReactNode;
  labelPosition?: LabelPosition;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  borderColor?: string;
  errorColor?: string;
  disableColor?: string;
  icon: ReactNode;
  size?: string;
  disabled?: boolean;
};

const Checkbox: React.FC<CheckboxProps> = (
  props: CheckboxProps
): JSX.Element => {
  const {
    value,
    onChange,
    name,
    label,
    error,
    labelPosition,
    errorColor = 'red',
    borderColor = 'black',
    disableColor = '#C6CDCF',
    icon,
    size,
    disabled,
  } = props;
  const [stateChecked, setChecked] = useState(Boolean(value));

  const handleInputOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (onChange) onChange(event);
    else setChecked(event.target.checked);
  };

  const labelEl = useMemo(() => {
    if (!label) return null;

    if (typeof label === 'string') {
      return <Text.Body>{label}</Text.Body>;
    }

    return label;
  }, [label]);

  return (
    <Styled.Container
      borderColor={borderColor}
      errorColor={errorColor}
      disableColor={disableColor}
      size={size}
      className={`checkbox${label ? ' checkbox--has-label' : ''}${
        value || stateChecked ? ' checkbox--checked' : ''
      }${error ? ' checkbox--has-error ' : ''}${
        label && labelPosition === 'left' ? ' checkbox--left' : ''
      }${disabled ? ' checkbox--disabled' : ''}`}
    >
      <div className="checkbox__input-wrapper">
        <input
          className="checkbox__input-wrapper__input"
          type="checkbox"
          name={name}
          checked={Boolean(value || stateChecked)}
          value={`${Boolean(value || stateChecked)}`}
          onChange={handleInputOnChange}
          disabled={disabled}
        />
        {value || stateChecked ? icon : null}
      </div>
      {labelEl}
    </Styled.Container>
  );
};

Checkbox.defaultProps = {
  label: '',
};

export default Checkbox;
