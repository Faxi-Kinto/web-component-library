import React, { useState, ChangeEvent } from 'react';
import Icon from '../Icon';
import * as Styled from './DropdownList.styles';
import { DropdownItem } from '.';
import { FieldProps } from '../../helpers/FieldProps';
import useField from '../../hooks/useField';

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
  small?: boolean;
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
    small,
  } = props;
  const [stateValue, setValue] = useState(value);

  const showError = useField(props);

  function handleOnChange(event: ChangeEvent<HTMLSelectElement>): void {
    if (onChange) onChange(event);
    else setValue(event.target.value);
  }

  return (
    <Styled.Container
      className={`dropdown${small ? ' dropdown--small' : ''}${
        className ? ' ' + className : ''
      }`}
    >
      {label && <label className="dropdown__label">{label}</label>}
      <div className="dropdown__select-wrapper">
        <select
          onChange={handleOnChange}
          value={value || stateValue || 'DEFAULT'}
          className={`dropdown__select-wrapper__select${
            showError || errstate
              ? 'dropdown__select-wrapper__select--error'
              : ''
          }`}
        >
          {placeholder ? (
            <option value="DEFAULT" disabled>
              {placeholder}
            </option>
          ) : (
            ''
          )}

          {list.map((item: any, index: number) => (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <Icon name="chevron-down" className="dropdown__icon" />
      </div>
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
