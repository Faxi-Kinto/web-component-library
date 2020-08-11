import styled from 'styled-components';
import {
  flexRow,
  pxToRem,
  positionAbsolute,
  flexColumn,
} from '@faxi/web-css-utilities';

export type DropdownStylingProps = {
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
};

export const Container = styled.div<DropdownStylingProps>`
  ${flexRow('space-between', 'center')};
  height: ${pxToRem('45px')};
  position: relative;
  min-width: ${pxToRem('250px')};
  border: ${pxToRem('1px')} solid
    ${(props: DropdownStylingProps) =>
      props.borderColor ? props.borderColor : 'black'};
  background: ${(props: DropdownStylingProps) =>
    props.backgroundColor ? props.backgroundColor : 'white'};
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
      padding-right: ${pxToRem('12px')};
    }

    &__selected-main {
      padding-right: ${pxToRem('12px')};
    }

    &__options {
      z-index: 1;
      position: absolute;
      top: ${pxToRem('44px')};
      right: 0;
      border: ${pxToRem('1px')} solid
        ${(props: DropdownStylingProps) =>
          props.borderColor ? props.borderColor : 'black'};
      border-top: none;
      background: ${(props: DropdownStylingProps) =>
        props.optionsBackgroundColor ? props.optionsBackgroundColor : 'white'};
      width: 100%;
      ${flexColumn()};

      &--upwards {
        ${positionAbsolute('inherit', '0', pxToRem('44px'), '0')};
        border-top: ${pxToRem('1px')} solid
          ${(props: DropdownStylingProps) =>
            props.borderColor ? props.borderColor : 'black'};
        border-bottom: none;
      }

      &--overflow-auto {
        height: ${pxToRem('282px')};
        overflow-y: auto;
        overflow-x: hidden;
      }

      &__option {
        border-bottom: ${pxToRem('1px')} solid
          ${(props: DropdownStylingProps) =>
            props.optionBorderTopBottomColor
              ? props.optionBorderTopBottomColor
              : 'gray'};

        &:last-of-type {
          border-bottom: none;
        }

        cursor: pointer;
        padding: ${pxToRem('10px')} ${pxToRem('30px')};
        ${flexRow('space-between', 'center')};
        word-break: break-all;

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
  }

  &.dropdown-container {
    &--open {
      border: ${pxToRem('1px')} solid
        ${(props: DropdownStylingProps) =>
          props.dropdownOpenBorderColor
            ? props.dropdownOpenBorderColor
            : 'gray'};

      .dropdown-container__arrow {
        transform: rotate(180deg);
      }
    }

    &--error {
      border: ${pxToRem('1px')} solid
        ${(props: DropdownStylingProps) =>
          props.dropdownErrorBorderColor
            ? props.dropdownErrorBorderColor
            : 'gray'};
    }

    &--icon-mode {
      border: none;
      width: fit-content;

      .dropdown-container__options {
        > div:first-child {
          border-top: ${pxToRem('1px')} solid
            ${(props: DropdownStylingProps) =>
              props.optionBorderTopBottomColor
                ? props.optionBorderTopBottomColor
                : 'gray'};
        }
      }
    }

    &--unset-min-width {
      min-width: unset;
    }
  }
`;
