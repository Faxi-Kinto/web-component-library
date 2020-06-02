import React, { useMemo } from 'react';
import * as Styled from './CheckboxField.styles';
import { FieldProps } from '../../helpers/FieldProps';
import useField from '../../hooks/useField';
import { CheckboxProps } from '../Checkbox/Checkbox.component';
import Text from '../Text';
import Checkbox from '../Checkbox';

/**
 * @name CheckboxField
 *
 * [Insert omponent description]
 *
 * @returns {JSX}
 */

export type CheckboxFieldProps = FieldProps<boolean> & {
  description?: React.ReactNode;
} & CheckboxProps;

const CheckboxField: React.FC<CheckboxFieldProps> = (
  props: CheckboxFieldProps
): JSX.Element => {
  const { value, onChange, description, error, ...rest } = props;

  const showError = useField(props);

  const descriptION = useMemo(() => {
    if (!description) return null;

    if (typeof description === 'string') {
      return (
        <Text.Body className="checkbox-field__description">
          {description}
        </Text.Body>
      );
    }
    return description;
  }, [description]);

  return (
    <Styled.Container>
      <Checkbox
        {...rest}
        checked={value}
        onChange={onChange ? ev => onChange(ev.target.checked) : undefined}
        error={showError}
      />
      {descriptION}
      {showError ? (
        <div className="checkbox-field__error-msg">{error}</div>
      ) : (
        ''
      )}
    </Styled.Container>
  );
};

CheckboxField.defaultProps = {};

export default CheckboxField;
