import styled from 'styled-components';
import {
  size,
  positionAbsolute,
  flexRow,
  pxToRem,
} from '@faxi/web-css-utilities';

type CheckboxStylingProps = {
  borderColor: string;
  errorColor?: string;
};

const defaultSize = pxToRem('26px');

export const Container = styled.label`
  position: relative;
  cursor: pointer;
  display: flex;
  ${size('fit-content', defaultSize)};

  > span {
    line-height: ${defaultSize};
  }

  &:before {
    content: '';
    display: inline-block;
    box-sizing: border-box;
    border: ${(props: CheckboxStylingProps) =>
      `${props.borderColor} solid ${pxToRem('1px')}`};
    ${positionAbsolute('0', '', '', '0')};
    ${size(defaultSize)};
  }

  &.checkbox {
    &--has-label {
      & > :last-child {
        margin-left: ${defaultSize};
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
        margin-right: ${defaultSize};
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
      ${size(defaultSize, '100%')}
      ${flexRow('center', 'center')};

      &__input {
        display: none;
      }
    }
  }
`;
