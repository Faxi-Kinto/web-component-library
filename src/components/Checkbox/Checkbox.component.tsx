import React, { useState, ChangeEvent, useMemo } from 'react';
import * as Styled from './Checkbox.styles';

import Text from '../Text';

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
  checked?: boolean;
  label?: React.ReactNode;
  labelPosition?: LabelPosition;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox: React.FC<CheckboxProps> = (
  props: CheckboxProps
): JSX.Element => {
  const { checked, onChange, name, label, error, labelPosition } = props;
  const [stateChecked, setChecked] = useState(checked);

  function handleInputOnChange(event: ChangeEvent<HTMLInputElement>): void {
    if (onChange) onChange(event);
    else setChecked(event.target.checked);
  }

  const labelEl = useMemo(() => {
    if (!label) return null;

    if (typeof label === 'string') {
      return <Text.Body>{label}</Text.Body>;
    }

    return label;
  }, [label]);

  return (
    <Styled.Container
      className={`${label ? 'label--has-label-text ' : ''}${
        checked || stateChecked ? 'checked ' : ''
      }${error ? 'label--has-error ' : ''}${
        label && labelPosition === 'left' ? 'label--left' : ''
      }`}
    >
      <input
        type="checkbox"
        name={name}
        checked={checked || stateChecked}
        onChange={handleInputOnChange}
      />
      {labelEl}
    </Styled.Container>
  );
};

Checkbox.defaultProps = {
  checked: false,
  label: '',
};

export default Checkbox;
