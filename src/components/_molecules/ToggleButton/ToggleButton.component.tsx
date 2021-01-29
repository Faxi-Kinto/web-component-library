import React, { useState, ChangeEvent, useMemo } from 'react';
import * as Styled from './ToggleButton.styles';
import classNames from 'classnames';

export type ToggleButtonProps = {
  className?: string;
  disabled?: boolean;
  name?: string;
  primaryColor?: string;
  secondaryColor?: string;
  toggleOffLabel?: string;
  toggleOnLabel?: string;
  value?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const ToggleButton: React.FC<ToggleButtonProps> = (
  props: ToggleButtonProps
): JSX.Element => {
  const {
    className,
    disabled,
    name,
    primaryColor,
    secondaryColor,
    toggleOffLabel,
    toggleOnLabel,
    value,
    onChange,
  } = props;
  const [localValue, setLocalValue] = useState(Boolean(value));

  const actualValue = useMemo(() => {
    return value !== undefined ? value : localValue;
  }, [localValue, value]);

  const handleInputOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (disabled) {
      return;
    }
    if (value === undefined) {
      setLocalValue(!localValue);
    }
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <Styled.ToggleButtonStyled
      className={classNames('wcl-toggle', className)}
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
    >
      <label className="wcl-toggle__toggle">
        <input
          type="checkbox"
          name={name}
          checked={actualValue}
          onChange={handleInputOnChange}
          value={`${Boolean(actualValue)}`}
          disabled={disabled}
        />
        <span
          className={classNames('wcl-toggle__toggle__slider', {
            'wcl-toggle__toggle__slider--disabled': disabled,
          })}
        ></span>
      </label>
      <span className="wcl-toggle__label">
        {actualValue ? toggleOnLabel : toggleOffLabel}
      </span>
    </Styled.ToggleButtonStyled>
  );
};

export default ToggleButton;
