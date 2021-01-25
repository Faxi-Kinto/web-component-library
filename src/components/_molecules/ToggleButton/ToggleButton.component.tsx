import React, { useState, ChangeEvent } from 'react';
import * as Styled from './ToggleButton.styles';

export type ToggleButtonProps = {
  className?: string;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  toggleOnLabel?: string;
  toggleOffLabel?: string;
  initialValue?: boolean;
  primaryColor?: string;
  secondaryColor?: string;
};

const ToggleButton: React.FC<ToggleButtonProps> = (
  props: ToggleButtonProps
): JSX.Element => {
  const {
    className,
    name,
    onChange,
    toggleOnLabel,
    toggleOffLabel,
    initialValue,
    primaryColor,
    secondaryColor,
  } = props;
  const [stateChecked, setChecked] = useState(Boolean(initialValue));

  const handleInputOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setChecked(!stateChecked);
    onChange && onChange(event);
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
          checked={stateChecked}
          value={`${Boolean(stateChecked)}`}
          onChange={handleInputOnChange}
        />
        <span className="slider"></span>
      </label>
      <span className="label">
        {stateChecked ? toggleOnLabel : toggleOffLabel}
      </span>
    </Styled.Container>
  );
};

export default ToggleButton;
