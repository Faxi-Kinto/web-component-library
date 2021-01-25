import React, {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { pxToRem } from '@faxi/web-css-utilities';
import classNames from 'classnames';
import ReactDOM from 'react-dom';

export type IDropdownOption = {
  label: string;
  value: string;
};

type DropdownOnChange = (event: IDropdownOption) => void;

export type IDropdown = {
  options: IDropdownOption[];
  onChange: DropdownOnChange;
};

export type DropdownProps = {
  className?: string;
  disabled?: boolean;
  iconClassName?: string;
  iconJsx?: JSX.Element;
  id?: string;
  noOptionsProvidedLabel?: string;
  options: IDropdownOption[];
  placeholder?: string;
  type: 'select' | 'expander';
  value?: IDropdownOption;
  onChange?: (option: IDropdownOption) => void;
  onClickHeading?: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
};

const emptyOption: IDropdownOption = {
  label: 'No options provided',
  value: '',
};

const Dropdown: React.FC<DropdownProps> = (
  props: DropdownProps
): JSX.Element => {
  const {
    className,
    iconClassName,
    iconJsx,
    id,
    noOptionsProvidedLabel,
    options,
    placeholder,
    type,
    value,
    onChange,
    onClickHeading,
  } = props;

  const [optionsRef, setOptionsRef] = useState<HTMLDivElement>();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [upwards, setUpwards] = useState(false);

  useEffect(() => {
    if (noOptionsProvidedLabel) {
      emptyOption.label = noOptionsProvidedLabel;
    }
  }, [noOptionsProvidedLabel]);

  const preSelectedValue = useMemo(() => {
    return options.find(option => option === value);
  }, [options, value]);

  const [stateValue, setStateValue] = useState(preSelectedValue);

  const actualValue = useMemo(() => {
    return (
      stateValue ||
      preSelectedValue ||
      (!placeholder && options[0]) ||
      emptyOption
    );
  }, [options, placeholder, preSelectedValue, stateValue]);

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

  const onChangeCallback = useCallback(
    (option: IDropdownOption) => {
      setStateValue(option);
      onChange?.(option);
      setIsOpen(false);
    },
    [onChange]
  );

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        isOpen &&
        event.target &&
        dropdownRef.current &&
        optionsRef &&
        !dropdownRef.current.contains(event.target as Node) &&
        !optionsRef.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    },
    [isOpen, optionsRef]
  );

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    if (type === 'select' && optionsRef && dropdownRef && dropdownRef.current) {
      if (
        optionsRef.getBoundingClientRect().height +
          dropdownRef.current.getBoundingClientRect().bottom >
        window.innerHeight
      ) {
        setUpwards(true);
      } else {
        setUpwards(false);
      }
    }
  }, [optionsRef, type]);

  const renderOptions = (): JSX.Element => {
    let dropdownTop = 0;
    let dropdownLeft = 0;
    let dropdownWidth = 0;
    let dropdownHeight = 0;
    if (dropdownRef.current) {
      const {
        top,
        left,
        width,
        height,
      } = dropdownRef.current?.getBoundingClientRect();
      dropdownTop = top;
      dropdownLeft = left;
      dropdownWidth = width;
      dropdownHeight = height;
    }
    return (
      <div
        className={classNames([
          'wcl-dropdown__options',
          {
            'wcl-dropdown__options--select': type === 'select',
          },
          {
            'wcl-dropdown__options--upwards': type === 'select' && upwards,
          },
        ])}
        id={id}
        style={
          type === 'select'
            ? {
                top: !upwards
                  ? `${pxToRem(
                      dropdownTop + dropdownHeight + window.scrollY - 1 + 'px'
                    )}`
                  : optionsRef
                  ? `${pxToRem(
                      dropdownTop +
                        window.scrollY +
                        1 -
                        optionsRef.getBoundingClientRect().height +
                        'px'
                    )}`
                  : 'initial',
                left: `${pxToRem(dropdownLeft + 'px')}`,
                width: `${pxToRem(dropdownWidth + 'px')}`,
              }
            : {}
        }
        ref={reference => {
          if (reference) {
            setOptionsRef(reference);
          }
        }}
      >
        {options.map((option, index) => {
          return (
            <div
              key={index}
              className={classNames(
                ['wcl-dropdown__options__option'],
                {
                  'wcl-dropdown__options__option--selected':
                    option.value === actualValue.value,
                },
                {
                  'wcl-dropdown__options__option--select': type === 'select',
                }
              )}
              data-value={option.value}
              onClick={() => {
                onChangeCallback(option);
              }}
            >
              {option.label}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <Fragment>
      <div
        ref={dropdownRef}
        className={classNames([
          'wcl-dropdown',
          { 'wcl-dropdown--select': type === 'select' },
          { 'wcl-dropdown--expander': type === 'expander' },
          className,
        ])}
        data-value={actualValue.value}
      >
        <div
          className={classNames([
            'wcl-dropdown__heading',
            {
              'wcl-dropdown__heading--select': type === 'select',
            },
            {
              'wcl-dropdown__heading--open': isOpen,
            },
            {
              'wcl-dropdown__heading--upwards': type === 'select' && upwards,
            },
          ])}
          onClick={ev => {
            onClickHeading && onClickHeading(ev);
            setIsOpen(!isOpen);
          }}
        >
          <div className="wcl-dropdown__heading__label">
            {actualValue === emptyOption ? placeholder : actualValue.label}
          </div>
          {iconJsx &&
            React.cloneElement(iconJsx, {
              className: classNames(
                'wcl-dropdown__heading__icon',
                { 'wcl-dropdown__heading__icon--open': isOpen },
                iconClassName
              ),
            })}
        </div>
        {isOpen &&
          (type === 'expander'
            ? renderOptions()
            : ReactDOM.createPortal(renderOptions(), document.body))}
      </div>
    </Fragment>
  );
};

export default Dropdown;
