import styled from 'styled-components';
import {
  flexRow,
  pxToRem,
  positionAbsolute,
  flexColumn,
} from '@faxi/web-css-utilities';

export type DropdownStylingProps = {
  borderColor?: string;
  dropdownOpenBorderColor?: string;
  placeholderColor?: string;
  optionBackgroundColor?: string;
  optionBorderBottomColor?: string;
  optionHoverColor?: string;
  optionSelectedBorderColor?: string;
  optionSelectedBackgroundColor?: string;
  optionSelectedHoverBackgroundColor?: string;
};

export const Container = styled.div<DropdownStylingProps>`
  ${flexRow('space-between', 'center')};
  height: ${pxToRem('45px')};
  position: relative;
  min-width: ${pxToRem('250px')};
  border: ${pxToRem('1px')} solid
    ${(props: DropdownStylingProps) =>
      props.borderColor ? props.borderColor : 'black'};
  padding: ${pxToRem('10px')} ${pxToRem('30px')};
  cursor: pointer;
  font-size: ${pxToRem('18px')};

  &:focus {
    outline: 0;
  }

  .dropdown-container {
    &__placeholder {
      color: ${(props: DropdownStylingProps) =>
        props.placeholderColor ? props.placeholderColor : 'black'};
    }

    &__arrow {
      margin-left: ${pxToRem('15px')};
    }

    &__options {
      position: absolute;
      top: ${pxToRem('44px')};
      right: 0;
      border-left: ${pxToRem('1px')} solid
        ${(props: DropdownStylingProps) =>
          props.borderColor ? props.borderColor : 'black'};
      border-right: ${pxToRem('1px')} solid
        ${(props: DropdownStylingProps) =>
          props.borderColor ? props.borderColor : 'black'};
      border-bottom: ${pxToRem('1px')} solid
        ${(props: DropdownStylingProps) =>
          props.borderColor ? props.borderColor : 'black'};
      background: ${(props: DropdownStylingProps) =>
        props.optionBackgroundColor ? props.optionBackgroundColor : 'white'};
      width: 100%;
      ${flexColumn()};

      &--upwards {
        ${positionAbsolute('inherit', '0', pxToRem('44px'), '0')};
        > div:first-child {
          border-top: ${pxToRem('1px')} solid grey;
        }
      }
      &--overflow-auto {
        height: ${pxToRem('282px')};
        overflow-y: auto;
        overflow-x: hidden;
      }
    }

    &__option {
      border-bottom: ${pxToRem('1px')} solid
        ${(props: DropdownStylingProps) =>
          props.optionBorderBottomColor
            ? props.optionBorderBottomColor
            : 'gray'};
      cursor: pointer;
      padding: ${pxToRem('10px')} ${pxToRem('30px')};

      &:hover {
        background: ${(props: DropdownStylingProps) =>
          props.optionHoverColor ? props.optionHoverColor : 'gray'};
      }

      &--selected {
        border: ${pxToRem('1px')} solid
          ${(props: DropdownStylingProps) =>
            props.optionSelectedBorderColor
              ? props.optionSelectedBorderColor
              : 'black'};
        margin: ${pxToRem('-1px')} ${pxToRem('-1px')} 0;
        background: ${(props: DropdownStylingProps) =>
          props.optionSelectedBackgroundColor
            ? props.optionSelectedBackgroundColor
            : 'lightgray'};

        &:hover {
          background: ${(props: DropdownStylingProps) =>
            props.optionSelectedHoverBackgroundColor
              ? props.optionSelectedHoverBackgroundColor
              : 'gray'};
        }
      }
    }
  }

  &.dropdown-container--open {
    border: ${pxToRem('1px')} solid
      ${(props: DropdownStylingProps) =>
        props.dropdownOpenBorderColor ? props.dropdownOpenBorderColor : 'gray'};
    .dropdown-container__arrow {
      transform: rotate(180deg);
    }
  }
`;
