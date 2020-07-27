import React, { useState, useEffect, ReactNode, Fragment } from 'react';
import * as Styled from './Dropdown.styles';

export type DropdownOption = {
  text: string;
  value: string;
  icon?: ReactNode;
};

export type DropdownProps<T = {}> = T & {
  optionList: DropdownOption[];
  label?: string;
  description?: string;
  placeholder?: string;
  value?: DropdownOption | string;
  toggleIcon?: JSX.Element;
  toggleIconClassName?: string;
  onChange?: (value: string) => void;
  className?: string;
  optionClassName?: string;
  labelClassName?: string;
  descriptionClassName?: string;
  errorClassName?: string;
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
  errorState?: boolean;
};

const Dropdown = <T,>(props: DropdownProps<T>): JSX.Element => {
  const {
    optionList,
    label,
    description,
    placeholder,
    value,
    toggleIcon,
    toggleIconClassName,
    onChange,
    className,
    optionClassName,
    labelClassName,
    descriptionClassName,
    errorClassName,
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
    errorState,
  } = props;
  const { error } = (props as any) || { error: '' };

  const [isOpen, setIsOpen] = useState(false);
  const [upwards, setUpwards] = useState(false);

  const [containerRef, setContainerRef] = useState<HTMLDivElement>();
  const [optionsRef, setOptionsRef] = useState<HTMLDivElement>();

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
    if (optionsRef && containerRef) {
      if (
        containerRef.getBoundingClientRect()?.bottom! +
          optionsRef?.getBoundingClientRect()?.height >
        window.innerHeight!
      ) {
        setUpwards(true);
      } else {
        setUpwards(false);
      }
    }
  }, [containerRef, optionsRef]);

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
          ref={reference => {
            if (reference) {
              setOptionsRef(reference);
            }
          }}
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
        className={`dropdown-container__options__option${
          option.value === currentSelected.value
            ? ' dropdown-container__options__option--selected'
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
        ref={reference => {
          if (reference) {
            setContainerRef(reference);
          }
        }}
        onClick={() => handleOpenDropdown()}
        className={`dropdown-container${
          iconMode ? ' dropdown-container--icon-mode' : ''
        }${
          isOpen ? ' dropdown-container--open' : ' dropdown-container--close'
        }${errorState ? ' dropdown-container--error' : ''}${
          !isOpen && iconMode ? ' dropdown-container--unset-min-width' : ''
        }${className ? ' ' + className : ''}`}
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
            className: `dropdown-container__arrow ${toggleIconClassName}`,
          })}
        {renderOptions()}
      </Styled.Container>
      {description && <div className={descriptionClassName}>{description}</div>}
      {errorState && <div className={errorClassName}>{error}</div>}
    </Fragment>
  );
};

export default Dropdown;