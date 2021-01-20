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
  borderColor?: string;
  disabled?: boolean;
  error?: boolean;
  errorColor?: string;
  icon: ReactNode;
  id?: string;
  label?: React.ReactNode;
  labelPosition?: LabelPosition;
  name?: string;
  size?: string;
  value?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox: React.FC<CheckboxProps> = (
  props: CheckboxProps
): JSX.Element => {
  const {
    borderColor = 'black',
    disabled,
    error,
    errorColor = '#eb4820',
    icon,
    id,
    label,
    labelPosition,
    name,
    size,
    value,
    onChange,
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
      className={classNames([
        'checkbox',
        { 'checkbox--has-label': label },
        { 'checkbox--checked': value || stateChecked },
        { 'checkbox--has-error': error },
        { 'checkbox--left': label && labelPosition === 'left' },
        { 'checkbox--disabled': disabled },
      ])}
      errorColor={errorColor}
      size={size}
    >
      <div className="checkbox__input-wrapper">
        <input
          checked={Boolean(value || stateChecked)}
          className="checkbox__input-wrapper__input"
          disabled={disabled}
          id={id}
          name={name}
          type="checkbox"
          value={`${Boolean(value || stateChecked)}`}
          onChange={handleInputOnChange}
        />
        {value || stateChecked ? icon : null}
      </div>
      {labelEl}
    </Styled.Container>
  );
};

export default Checkbox;
