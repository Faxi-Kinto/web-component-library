import React, { useState, ChangeEvent, useMemo, ReactNode } from 'react';
import * as Styled from './Checkbox.styles';
import Text from '../../atoms/Text';

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
  icon: ReactNode;
  size?: string;
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
    icon,
    size,
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
      size={size}
      className={`checkbox${label ? ' checkbox--has-label' : ''}${
        value || stateChecked ? ' checkbox--checked' : ''
      }${error ? ' checkbox--has-error ' : ''}${
        label && labelPosition === 'left' ? ' checkbox--left' : ''
      }`}
    >
      <div className="checkbox__input-wrapper">
        <input
          className="checkbox__input-wrapper__input"
          type="checkbox"
          name={name}
          checked={Boolean(value || stateChecked)}
          value={`${Boolean(value || stateChecked)}`}
          onChange={handleInputOnChange}
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
