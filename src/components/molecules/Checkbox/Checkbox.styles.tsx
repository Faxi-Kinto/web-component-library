import styled from 'styled-components';
import {
  size,
  positionAbsolute,
  flexRow,
  pxToRem,
} from '@faxi/web-css-utilities';

type CheckboxStylingProps = {
  borderColor?: string;
  errorColor?: string;
  size?: string;
};

const defaultSize = pxToRem('20px');

export const Container = styled.label`
  position: relative;
  cursor: pointer;
  display: flex;
  ${size('100%', '')};
  min-height: ${(props: CheckboxStylingProps) =>
    props.size ? props.size : defaultSize};

  > span {
    line-height: ${(props: CheckboxStylingProps) =>
      props.size ? props.size : defaultSize};
  }

  &:before {
    content: '';
    display: inline-block;
    box-sizing: border-box;
    border: ${(props: CheckboxStylingProps) =>
      `${props.borderColor} solid ${pxToRem('1px')}`};
    ${positionAbsolute('0', '', '', '0')};
    ${(props: CheckboxStylingProps) =>
      props.size
        ? `
      ${size(props.size)};
      `
        : `
      ${size(defaultSize)};
      `};
  }

  &.checkbox {
    &--has-label {
      & > :last-child {
        margin-left: ${(props: CheckboxStylingProps) =>
          props.size ? props.size : defaultSize};
        padding-left: ${pxToRem('5px')};
      }
    }

    &--has-error {
      color: ${(props: CheckboxStylingProps) => `${props.errorColor}`};
      &:before {
        border: ${(props: CheckboxStylingProps) => `${props.errorColor}`} solid
          ${pxToRem('1px')};
      }
    }

    &--left {
      & > :last-child {
        margin-left: unset;
        padding-left: unset;
        margin-right: ${(props: CheckboxStylingProps) =>
          props.size ? props.size : defaultSize};
        padding-right: ${pxToRem('5px')};
      }

      &:before {
        ${positionAbsolute('0', '0', '', 'auto')};
      }

      .checkbox {
        &__input-wrapper {
          ${positionAbsolute('0', '0', '', 'auto')};
        }
      }
    }
  }

  .checkbox {
    &__input-wrapper {
      position: absolute;
      ${(props: CheckboxStylingProps) =>
        props.size
          ? `
      ${size(props.size)};
      `
          : `
      ${size(defaultSize)};
      `};
      ${flexRow('center', 'center')};

      &__input {
        display: none;
      }
    }
  }
`;
