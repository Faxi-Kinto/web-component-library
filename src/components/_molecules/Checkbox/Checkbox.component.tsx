import React, { useState, ChangeEvent, useMemo, ReactNode } from 'react';
import * as Styled from './Checkbox.styles';
import Text from '../../_atoms/Text';
import classNames from 'classnames';

/**
 * @name Checkbox
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
  disabled?: boolean;
  id?: string;
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
    errorColor = '#eb4820',
    borderColor = 'black',
    icon,
    size,
    disabled,
    id,
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
      className={classNames([
        'checkbox',
        { 'checkbox--has-label': label },
        { 'checkbox--checked': value || stateChecked },
        { 'checkbox--has-error': error },
        { 'checkbox--left': label && labelPosition === 'left' },
        { 'checkbox--disabled': disabled },
      ])}
    >
      <div className="checkbox__input-wrapper">
        <input
          className="checkbox__input-wrapper__input"
          type="checkbox"
          id={id}
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
