import React, { useState, useMemo } from 'react';
import * as Styled from './RadioGroup.styles';
import RadioField from '../RadioField';
import { SizeType } from '../RadioField/RadioField.component';
import { FieldProps } from '../../helpers/FieldProps';

type RadioGroupOptionType = {
  label: string;
  value: string;
};

export type RadioGroupProps = FieldProps & {
  options: RadioGroupOptionType[];
  name: string;
  size?: SizeType;
  selected?: string;
  label?: string;
  description?: string;
};

const RadioGroup: React.FC<RadioGroupProps> = (
  props: RadioGroupProps
): JSX.Element => {
  const {
    options,
    name,
    selected,
    label,
    description,
    value,
    size,
    onChange,
  } = props;

  const [stateSelected, setSelected] = useState(selected);
  const current = useMemo(() => value || stateSelected, [stateSelected, value]);

  return (
    <Styled.Container>
      {label ? <div className="radio-group__label">{label}</div> : null}
      <div className="radio-group__container">
        {options.map(
          (
            { label, value }: { label: string; value: string },
            index: number
          ) => (
            <RadioField
              name={name}
              label={label}
              value={value}
              key={index}
              checked={current === value}
              onChange={(): void => {
                setSelected(value);
                onChange && onChange(value);
              }}
              size={size}
            />
          )
        )}
        {description ? (
          <div className="input__description-msg">{description}</div>
        ) : (
          ''
        )}
      </div>
    </Styled.Container>
  );
};
export default RadioGroup;
