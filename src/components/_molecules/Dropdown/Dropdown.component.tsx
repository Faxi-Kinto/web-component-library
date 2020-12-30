import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import * as Styled from './Dropdown.styles';
import { pxToRem } from '@faxi/web-css-utilities';
import classNames from 'classnames';
import { FieldProps } from '../FieldProps';

export type IDropdownOption = {
  label: string;
  value: string;
};

type DropdownOnChange = (event: IDropdownOption) => void;

export type IDropdown = {
  options: IDropdownOption[];
  onChange: DropdownOnChange;
};

export type DropdownProps = FieldProps<IDropdownOption, DropdownOnChange> & {
  options: IDropdownOption[];
  placeholder?: string;
  disabled?: boolean;
  type: 'select' | 'expander';
  iconJsx?: JSX.Element;
  noOptionsProvidedLabel?: string;
  iconOpenName?: string;
  iconClosedName?: string;
  onClickHeading?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {};
  id?: string;
};

const emptyOption: IDropdownOption = {
  label: 'No options provided',
  value: '',
};

const Dropdown: React.FC<DropdownProps> = (props: DropdownProps) => {
  const {
    options,
    placeholder,
    value,
    type,
    iconJsx,
    noOptionsProvidedLabel,
    iconOpenName,
    iconClosedName,
    onChange,
    onClickHeading,
    id,
  } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [stateValue, setStateValue] = useState<IDropdownOption>();

  useEffect(() => {
    if (noOptionsProvidedLabel) {
      emptyOption.label = noOptionsProvidedLabel;
    }
  }, [noOptionsProvidedLabel]);

  const preSelectedValue = useMemo(() => {
    return options.find(option => option === value);
  }, [options, value]);

  const actualValue = useMemo(() => {
    return (
      preSelectedValue ||
      stateValue ||
      (!placeholder && options[0]) ||
      emptyOption
    );
  }, [options, placeholder, preSelectedValue, stateValue]);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (stateValue && onChange && actualValue) {
      onChange(actualValue);
      setIsOpen(false);
    }
  }, [actualValue, onChange, stateValue]);

  // ESCAPE BUTTON
  const onKeyUpEsc = useCallback(
    (e: KeyboardEvent) => {
      if (isOpen && e.key === 'Escape') {
        setIsOpen(false);
      }
    },
    [isOpen]
  );

  useEffect(() => {
    window.addEventListener('keyup', onKeyUpEsc);
    return () => {
      window.removeEventListener('keyup', onKeyUpEsc);
    };
  }, [onKeyUpEsc]);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        isOpen &&
        event.target &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    },
    [isOpen]
  );

  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <Styled.Dropdown
      ref={dropdownRef}
      id={id}
      className={classNames([
        'wcl-dropdown',
        { 'wcl-dropdown--select': type === 'select' },
        { 'wcl-dropdown--expander': type === 'expander' },
      ])}
    >
      <div
        className="wcl-dropdown__heading"
        onClick={ev => {
          onClickHeading && onClickHeading(ev);
          setIsOpen(!isOpen);
        }}
      >
        <div className="wcl-dropdown__heading__label">
          {placeholder || actualValue.label}
        </div>
        {iconJsx &&
          React.cloneElement(iconJsx, {
            className: 'wcl-dropdown__heading__icon',
            name: isOpen ? iconOpenName : iconClosedName,
            size: pxToRem('20px'),
          })}
      </div>
      {isOpen && (
        <div
          className={classNames([
            'wcl-dropdown__options',
            {
              'wcl-dropdown__options--select': type === 'select',
            },
          ])}
        >
          {options.map((option, index) => {
            return (
              <div
                key={index}
                className={classNames(['wcl-dropdown__options__option'], {
                  'wcl-dropdown__options__option--selected':
                    option.value === actualValue.value,
                })}
                onClick={() => {
                  setStateValue(option);
                }}
              >
                {option.label}
              </div>
            );
          })}
        </div>
      )}
    </Styled.Dropdown>
  );
};

export default Dropdown;
