import React, {
  useState,
  useEffect,
  ReactNode,
  Fragment,
  useMemo,
} from 'react';
import * as Styled from './Dropdown.styles';
import classNames from 'classnames';
import Label from '../../_atoms/Label/Label.component';
import { useVisible } from 'hooks';

export type DropdownOption = {
  text: string;
  value: string;
  icon?: ReactNode;
};

export type DropdownProps<T = {}> = T & {
  optionList?: DropdownOption[];
  children?: JSX.Element;
  label?: string;
  description?: string;
  placeholder?: string;
  value?: DropdownOption;
  toggleIcon?: JSX.Element;
  toggleIconClassName?: string;
  onChange?: (value: DropdownOption) => void;
  className?: string;
  containerClassName?: string;
  optionClassName?: string;
  labelClassName?: string;
  descriptionClassName?: string;
  errorClassName?: string;
  borderColor?: string;
  backgroundColor?: string;
  dropdownOpenBorderColor?: string;
  dropdownErrorBorderColor?: string;
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
    children,
    label,
    description,
    placeholder,
    value,
    toggleIcon,
    toggleIconClassName,
    onChange,
    className,
    containerClassName,
    optionClassName,
    labelClassName,
    descriptionClassName,
    errorClassName,
    borderColor,
    backgroundColor,
    dropdownOpenBorderColor,
    dropdownErrorBorderColor,
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
  const { error } = props as any;

  const [upwards, setUpwards] = useState(false);

  const [containerRef, setContainerRef] = useState<HTMLDivElement>();
  const [optionsRef, setOptionsRef] = useState<HTMLDivElement>();

  const { ref, isVisible, setIsVisible } = useVisible(false);

  const propSelected = useMemo(() => {
    return optionList?.find(el => el === value);
  }, [optionList, value]);

  const [currentSelected, setCurrentSelected] = useState(propSelected);

  const actualSelected = useMemo(
    () => propSelected || currentSelected || { text: '', value: '' },
    [currentSelected, propSelected]
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
    return (
      <div
        className={classNames([
          'dropdown-container__options',
          { 'dropdown-container__options--upwards': upwards },
          {
            'dropdown-container__options--overflow-auto':
              optionList && optionList.length > 5,
          },
        ])}
        role="list"
        ref={reference => {
          if (reference) {
            setOptionsRef(reference);
          }
        }}
      >
        {optionList?.map((option: DropdownOption, index: number) =>
          renderOption(option, index)
        )}
      </div>
    );
  };

  const renderOption = (option: DropdownOption, index: number) => {
    return (
      <div
        key={index}
        data-listitem-label={option.text}
        onClick={() => {
          setCurrentSelected({ ...option });
          onChange && onChange(option);
        }}
        className={classNames([
          'dropdown-container__options__option',
          {
            'dropdown-container__options__option--selected':
              option.value === actualSelected.value,
          },
          optionClassName,
        ])}
        role="listitem"
      >
        {option.icon}
        <span>{option.text}</span>
      </div>
    );
  };

  return (
    <div className={containerClassName} ref={ref}>
      {label && <Label className={labelClassName}>{label}</Label>}
      <Styled.Container
        ref={reference => {
          if (reference) {
            setContainerRef(reference);
          }
        }}
        onClick={() => {
          setIsVisible(children ? true : !isVisible);
        }}
        className={classNames([
          'dropdown-container',
          {
            'dropdown-container--icon-mode': iconMode,
          },
          {
            'dropdown-container--open': isVisible,
            'dropdown-container--close': !isVisible,
          },
          {
            'dropdown-container--error': errorState,
          },
          {
            'dropdown-container--unset-min-width': !isVisible && iconMode,
          },
          className,
        ])}
        tabIndex={-1}
        borderColor={borderColor}
        backgroundColor={backgroundColor}
        dropdownOpenBorderColor={dropdownOpenBorderColor}
        dropdownErrorBorderColor={dropdownErrorBorderColor}
        placeholderColor={placeholderColor}
        optionsBackgroundColor={optionsBackgroundColor}
        optionBorderTopBottomColor={optionBorderTopBottomColor}
        optionHoverColor={optionHoverColor}
        optionSelectedBorderColor={optionSelectedBorderColor}
        optionSelectedBackgroundColor={optionSelectedBackgroundColor}
        optionSelectedHoverBackgroundColor={optionSelectedHoverBackgroundColor}
      >
        {actualSelected.text === '' ? (
          placeholder ? (
            <div className="dropdown-container__placeholder">{placeholder}</div>
          ) : (
            <Fragment>
              {optionList && optionList[0].icon}
              {!iconMode && (
                <div className="dropdown-container__selected-main">
                  {optionList && optionList[0].text}
                </div>
              )}
            </Fragment>
          )
        ) : (
          <Fragment>
            {actualSelected.icon}
            {!iconMode && (
              <div className="dropdown-container__selected-main">
                {actualSelected.text}
              </div>
            )}
          </Fragment>
        )}
        {toggleIcon &&
          React.cloneElement(toggleIcon, {
            className: classNames([
              'dropdown-container__arrow',
              toggleIconClassName,
            ]),
          })}
        {isVisible &&
          (optionList
            ? renderOptions()
            : children &&
              React.cloneElement(children, {
                className: classNames([
                  'dropdown-container__options',
                  { 'dropdown-container__options--upwards': upwards },
                  {
                    'dropdown-container__options--overflow-auto': optionList,
                  },
                ]),
              }))}
      </Styled.Container>
      {description && <div className={descriptionClassName}>{description}</div>}
      {errorState && <div className={errorClassName}>{error}</div>}
    </div>
  );
};

export default Dropdown;
