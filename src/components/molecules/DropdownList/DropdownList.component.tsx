import React, { useState, ChangeEvent } from 'react';
import { Icon } from 'components';
import * as Styled from './DropdownList.styles';
import { DropdownItem } from './';
import { FieldProps } from '../FormField/FieldProps';
import useField from 'hooks/useField';

/**
 * @name DropdownList
 *
 * Dropdown list of selectable options
 *
 * @returns {JSX}
 */

type SelectOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => void;

export type DropdownListProps = FieldProps<string, SelectOnChange> & {
  list: DropdownItem[];
  placeholder?: string;
  className?: string;
  description?: string;
  errstate?: boolean;
  label?: string;
};

const DropdownList: React.FC<DropdownListProps> = (
  props: DropdownListProps
): JSX.Element => {
  const {
    list,
    onChange,
    value,
    error,
    placeholder,
    className,
    description,
    errstate,
    label,
  } = props;
  const [stateValue, setValue] = useState(value);

  const showError = useField(props);

  function handleOnChange(event: ChangeEvent<HTMLSelectElement>): void {
    if (onChange) onChange(event);
    else setValue(event.target.value);
  }

  return (
    <Styled.Container className={className}>
      {label && <label>{label}</label>}
      <select
        onChange={handleOnChange}
        value={value || stateValue || 'DEFAULT'}
        className={showError || errstate ? 'select--error' : ''}
      >
        {placeholder ? (
          <option value="DEFAULT" disabled>
            {placeholder}
          </option>
        ) : (
          ''
        )}

        {list.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      <Icon name="chevron-down" className="__icon" />
      {description ? (
        <div className="dropdown__description-msg">{description}</div>
      ) : (
        ''
      )}
      {showError ? <div className="dropdown__error-msg">{error}</div> : ''}
    </Styled.Container>
  );
};

export default DropdownList;
