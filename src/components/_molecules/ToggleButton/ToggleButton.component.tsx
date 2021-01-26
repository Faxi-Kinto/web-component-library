import React, { useState, ChangeEvent, useMemo } from 'react';
import * as Styled from './ToggleButton.styles';

export type ToggleButtonProps = {
  className?: string;
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
    if (value === undefined) {
      setLocalValue(!localValue);
    }
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <Styled.Container
      className={className}
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
    >
      <label className="toggle">
        <input
          type="checkbox"
          name={name}
          checked={actualValue}
          onChange={handleInputOnChange}
        />
        <span className="slider"></span>
      </label>
      <span className="label">
        {actualValue ? toggleOnLabel : toggleOffLabel}
      </span>
    </Styled.Container>
  );
};

export default ToggleButton;
