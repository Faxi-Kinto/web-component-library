import React, { useState, ChangeEvent, useMemo } from 'react';
import * as Styled from './NumberField.styles';
import { DropdownList, Input } from 'components';
import { FieldProps } from '../FormField/FieldProps';
import { DropdownItem } from 'components/molecules/DropdownList';
import useField from 'hooks/useField';

/**
 * @name NumberField
 *
 * Number Field component: Dropdown + Tex Input
 *
 * @returns {JSX}
 */

export type PhoneNumber = {
  number: string;
  country: string;
};

export type NumberFieldProps = FieldProps<PhoneNumber> & {
  onChange?: (value: string) => void;
  list: DropdownItem[];
  description?: string;
  placeholder?: string;
  label?: string;
};

const NumberField: React.FC<NumberFieldProps> = (
  props: NumberFieldProps
): JSX.Element => {
  const {
    onChange,
    name,
    value,
    label,
    list,
    error,
    dirty,
    touched,
    description,
    placeholder,
    ...rest
  } = props;

  const regexpInteger = new RegExp('^[0-9]*$');

  const [inputValue, setInputValue] = useState<string>(value?.number || '');
  const [dropdownValue, setDropdownValue] = useState<string>(
    value?.country || ''
  );

  const country = useMemo(() => value?.country || dropdownValue, [
    value,
    dropdownValue,
  ]);

  const number = useMemo(() => value?.number || inputValue, [
    value,
    inputValue,
  ]);

  const showError = useField(props);

  function handleSelectChange(event: ChangeEvent<HTMLSelectElement>): void {
    setDropdownValue(event.target.value);
    if (onChange)
      onChange({
        country: event.target.value,
        number,
      });
  }

  function handleInputChange(event: string): void {
    if (regexpInteger.test(event)) {
      setInputValue(event);
      if (onChange)
        onChange({
          country,
          number: event,
        });
    }
  }

  return (
    <Styled.Container>
      {label && <label htmlFor={`${name}.number`}>{label}</label>}
      <div className="number-field">
        <DropdownList
          className="number-field__dropdown"
          error={error}
          list={list}
          onChange={handleSelectChange}
          value={country}
          errstate={showError}
        />
        <Input
          {...rest}
          onChange={handleInputChange}
          name={`${name}.number`}
          error={showError}
          value={number}
          placeholder={placeholder}
        />
      </div>
      {description ? (
        <div className="number-field__description-msg">{description}</div>
      ) : (
        ''
      )}
      {showError ? <div className="number-field__error-msg">{error}</div> : ''}
    </Styled.Container>
  );
};

export default NumberField;
