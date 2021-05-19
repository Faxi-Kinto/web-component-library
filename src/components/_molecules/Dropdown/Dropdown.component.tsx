import React, {
  Fragment,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { pxToRem } from '@faxi/web-css-utilities';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import * as Styled from './Dropdown.styles';

export type IDropdownOption = {
  label: ReactNode;
  value: string;
  searchValue?: string;
  id?: string;
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
  renderInBody?: boolean;
  searchable?: boolean;
  initSearch?: string;
  searchInputPrefix?: ReactNode;
  asyncSearch?: boolean;
  searchInputProps?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  optionsElProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
  emptyState?: ReactNode;
  onSearchTermChange?: (term: string) => void;
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
    renderInBody = true,
    searchable = false,
    initSearch = '',
    asyncSearch = false,
    searchInputProps,
    optionsElProps,
    searchInputPrefix = null,
    emptyState = null,
    onSearchTermChange,
    onChange,
    onClickHeading,
  } = props;

  const {
    className: optionsElClassName,
    style: optionsElStyle,
    ...optionsElRestProps
  } = optionsElProps || {};

  const [optionsRef, setOptionsRef] = useState<HTMLDivElement>();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [upwards, setUpwards] = useState(false);
  const [searchValue, setSearchValue] = useState(initSearch);
  const [filteredOptions, setFilteredOptions] = useState<IDropdownOption[]>(
    options
  );

  const finalOptions = useMemo(
    () => (searchable && !asyncSearch ? filteredOptions : options),
    [asyncSearch, filteredOptions, options, searchable]
  );

  useEffect(() => {
    if (noOptionsProvidedLabel) {
      emptyOption.label = noOptionsProvidedLabel;
    }
  }, [noOptionsProvidedLabel]);

  const preSelectedValue = useMemo(() => {
    return options.find(option => option.value === value?.value);
  }, [options, value]);
  const [stateValue, setStateValue] = useState(preSelectedValue);

  useEffect(() => {
    setStateValue(preSelectedValue);
  }, [preSelectedValue]);

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
      const target = event.target as Node;
      const { current: dropdown } = dropdownRef;

      if (
        isOpen &&
        target &&
        dropdown &&
        optionsRef &&
        !dropdown.contains(target as Node) &&
        !optionsRef.contains(target as Node)
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
    if (
      type === 'select' &&
      optionsRef &&
      dropdownRef &&
      dropdownRef.current &&
      renderInBody
    ) {
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
  }, [optionsRef, renderInBody, type]);

  const onSearchInput: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    ({ target: { value } }) => {
      setSearchValue(value);
      onSearchTermChange?.(value);
    },
    [onSearchTermChange]
  );

  const dropdownHeader = useMemo(() => {
    return (
      <>
        {searchable && isOpen && (
          <Styled.InputWrapper className="wcl-dropdown__heading__input-wrapper">
            {searchInputPrefix}
            <input
              autoFocus
              value={searchValue}
              onChange={onSearchInput}
              {...searchInputProps}
            />
          </Styled.InputWrapper>
        )}
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
      </>
    );
  }, [
    searchable,
    actualValue,
    placeholder,
    iconJsx,
    isOpen,
    iconClassName,
    searchValue,
    searchInputProps,
    searchInputPrefix,
    onSearchInput,
  ]);

  const optionsEl = useMemo((): JSX.Element => {
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
        className={classNames(
          'wcl-dropdown__options',
          {
            'wcl-dropdown__options--select': type === 'select',
            'wcl-dropdown__options--upwards':
              type === 'select' && upwards && isOpen,
          },
          optionsElClassName
        )}
        style={{
          ...(type === 'select'
            ? {
                top: !upwards
                  ? `${pxToRem(
                      dropdownHeight +
                        (renderInBody ? dropdownTop + window.scrollY : 0) +
                        'px'
                    )}`
                  : optionsRef
                  ? `${pxToRem(
                      dropdownTop +
                        (renderInBody ? window.scrollY : 0) -
                        optionsRef.getBoundingClientRect().height +
                        'px'
                    )}`
                  : 'initial',
                left: renderInBody
                  ? `${pxToRem(dropdownLeft + 'px')}`
                  : 'initial',
                width: `${pxToRem(dropdownWidth + 'px')}`,
              }
            : {}),
          ...optionsElStyle,
        }}
        ref={reference => {
          if (reference) {
            setOptionsRef(reference);
          }
        }}
        {...optionsElRestProps}
      >
        {finalOptions.length === 0 && emptyState}
        {finalOptions.map((option, index) => {
          return (
            <div
              id={option.id}
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
  }, [
    actualValue.value,
    finalOptions,
    isOpen,
    optionsElClassName,
    optionsElRestProps,
    optionsElStyle,
    optionsRef,
    renderInBody,
    type,
    upwards,
    emptyState,
    onChangeCallback,
  ]);

  useEffect(() => {
    if (!searchable || asyncSearch) return;
    if (searchValue === '') setFilteredOptions(options);

    setFilteredOptions(
      options.filter(option =>
        RegExp(
          ` ${searchValue.trim().replace(/[^a-z]/gi, '')} `
            .split('')
            .join('.*')
            .trim(),
          'gi'
        ).test(
          option.searchValue ||
            (typeof option.label === 'string' ? option.label : option.value)
        )
      )
    );
  }, [asyncSearch, options, searchValue, searchable]);

  useEffect(() => {
    if (searchable) setSearchValue('');
  }, [searchable, actualValue]);

  return (
    <Fragment>
      <div
        id={id}
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
              'wcl-dropdown__heading--upwards':
                type === 'select' && upwards && isOpen,
            },
          ])}
          onClick={ev => {
            onClickHeading && onClickHeading(ev);
            setIsOpen(!isOpen);
          }}
        >
          {dropdownHeader}
        </div>
        {isOpen &&
          (type === 'expander' || !renderInBody
            ? optionsEl
            : ReactDOM.createPortal(optionsEl, document.body))}
      </div>
    </Fragment>
  );
};

export default Dropdown;
