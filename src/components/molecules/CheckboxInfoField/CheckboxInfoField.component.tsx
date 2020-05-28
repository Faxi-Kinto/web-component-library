import React, { useState } from 'react';
import * as Styled from './CheckboxInfoField.styles';
import Checkbox from '../Checkbox';
import { FieldProps } from '../FormField/FieldProps';
import useField from 'hooks/useField';
import { CheckboxProps } from '../Checkbox/Checkbox.component';
import { Text } from 'components';

/**
 * @name CheckboxInfoField
 *
 * [Insert omponent description]
 *
 * @returns {JSX}
 */

export type CheckboxInfoFieldProps = FieldProps<boolean> & {
  label: string;
  description: string | JSX.Element | JSX.Element[];
  lastElement?: boolean;
} & CheckboxProps;

const CheckboxInfoField: React.FC<CheckboxInfoFieldProps> = (
  props: CheckboxInfoFieldProps
): JSX.Element => {
  const {
    value,
    onChange,
    error,
    description,
    label,
    lastElement,
    ...rest
  } = props;

  const [selected, setSelected] = useState(false);
  const showError = useField(props);
  return (
    <Styled.Container
      className={`checkbox-info-field ${lastElement &&
        'checkbox-info-field__no-border'}`}
    >
      <Checkbox
        {...rest}
        label={
          <Text.Body
            className={`checkbox-info-field__privacy-title ${selected &&
              'checkbox-info-field__selected'}`}
          >
            {label}
          </Text.Body>
        }
        checked={value}
        onChange={ev => {
          setSelected(!selected);
          onChange && onChange(ev.target.checked);
        }}
        error={showError}
      />
      <Text.Body className="checkbox-info-field__privacy-body">
        {description}
      </Text.Body>
      {showError ? (
        <div className="checkbox-info-field__error-msg">{error}</div>
      ) : (
        ''
      )}
    </Styled.Container>
  );
};

CheckboxInfoField.defaultProps = {};

export default CheckboxInfoField;
