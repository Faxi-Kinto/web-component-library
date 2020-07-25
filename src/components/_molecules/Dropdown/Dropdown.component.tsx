import React, { useState, useEffect, ReactNode, Fragment } from 'react';
import * as Styled from './Dropdown.styles';

export type DropdownOption = {
  text: string;
  value: string;
  icon?: ReactNode;
};

export type DropdownProps = {
  optionList: DropdownOption[];
  label?: string;
  placeholder?: string;
  value?: DropdownOption | string;
  toggleIcon?: JSX.Element;
  onChange?: (value: string) => void;
  className?: string;
  optionClassName?: string;
  labelClassName?: string;
  dropdownRef?: HTMLDivElement;
  parentRef?: (element: HTMLDivElement) => void;
  borderColor?: string;
  dropdownOpenBorderColor?: string;
  placeholderColor?: string;
  optionsBackgroundColor?: string;
  optionBorderTopBottomColor?: string;
  optionHoverColor?: string;
  optionSelectedBorderColor?: string;
  optionSelectedBackgroundColor?: string;
  optionSelectedHoverBackgroundColor?: string;
  iconMode?: boolean;
};

const Dropdown: React.FC<DropdownProps> = (
  props: DropdownProps
): JSX.Element => {
  const {
    optionList,
    label,
    placeholder,
    value,
    toggleIcon,
    onChange,
    className,
    optionClassName,
    labelClassName,
    dropdownRef,
    parentRef,
    borderColor,
    dropdownOpenBorderColor,
    placeholderColor,
    optionsBackgroundColor,
    optionBorderTopBottomColor,
    optionHoverColor,
    optionSelectedBorderColor,
    optionSelectedBackgroundColor,
    optionSelectedHoverBackgroundColor,
    iconMode = false,
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [upwards, setUpwards] = useState(false);

  const [currentSelected, setCurrentSelected] = useState(
    (typeof value === 'string'
      ? {
          text: value,
          value: value,
        }
      : value) || {
      text: '',
      value: '',
    }
  );

  useEffect(() => {
    if (dropdownRef) {
      const rootSize = window.outerHeight;
      const dropdownSize = dropdownRef?.getBoundingClientRect();
      if (dropdownSize?.bottom! + dropdownSize?.height > rootSize!) {
        setUpwards(true);
      } else {
        setUpwards(false);
      }
    }
  }, [dropdownRef]);

  const renderOptions = () => {
    if (isOpen) {
      return (
        <div
          className={`dropdown-container__options${
            upwards ? ' dropdown-container__options--upwards' : ''
          } ${
            optionList.length > 5
              ? ' dropdown-container__options--overflow-auto'
              : ''
          }`}
          role="list"
          ref={parentRef}
        >
          {optionList.map((option: DropdownOption, index: number) =>
            renderOption(option, index)
          )}
        </div>
      );
    }
  };

  const renderOption = (option: DropdownOption, index: number) => {
    return (
      <div
        key={index}
        onClick={() => {
          setCurrentSelected({ ...option });
          onChange && onChange(option.value);
        }}
        className={`dropdown-container__option${
          option.value === currentSelected.value
            ? ' dropdown-container__option--selected'
            : ''
        }${optionClassName ? ' ' + optionClassName : ''}`}
        role="listitem"
      >
        {option.icon}
        <span>{option.text}</span>
      </div>
    );
  };

  const handleOpenDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      {label && <label className={labelClassName}>{label}</label>}
      <Styled.Container
        onClick={() => handleOpenDropdown()}
        className={`dropdown-container${
          iconMode ? ' dropdown-container--icon-mode' : ''
        }${
          isOpen ? ' dropdown-container--open' : ' dropdown-container--close'
        }${!isOpen && iconMode ? ' dropdown-container--unset-min-width' : ''}${
          className ? ' ' + className : ''
        }`}
        tabIndex={-1}
        onBlur={() => setIsOpen(false)}
        borderColor={borderColor}
        dropdownOpenBorderColor={dropdownOpenBorderColor}
        placeholderColor={placeholderColor}
        optionsBackgroundColor={optionsBackgroundColor}
        optionBorderTopBottomColor={optionBorderTopBottomColor}
        optionHoverColor={optionHoverColor}
        optionSelectedBorderColor={optionSelectedBorderColor}
        optionSelectedBackgroundColor={optionSelectedBackgroundColor}
        optionSelectedHoverBackgroundColor={optionSelectedHoverBackgroundColor}
      >
        {currentSelected.text === '' ? (
          placeholder ? (
            <div className="dropdown-container__placeholder">{placeholder}</div>
          ) : (
            <Fragment>
              {optionList[0].icon}
              {!iconMode && <div>{optionList[0].text}</div>}
            </Fragment>
          )
        ) : (
          <Fragment>
            {currentSelected.icon}
            {!iconMode && <div>{currentSelected.text}</div>}
          </Fragment>
        )}
        {toggleIcon &&
          React.cloneElement(toggleIcon, {
            className: 'dropdown-container__arrow',
            color: '#00A5B5',
          })}
        {renderOptions()}
      </Styled.Container>
    </Fragment>
  );
};

export default Dropdown;
