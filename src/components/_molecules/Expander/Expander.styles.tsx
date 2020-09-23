import styled from 'styled-components';
import { pxToRem } from '@faxi/web-css-utilities';

export type ExpanderStylingProps = {
  headerColor?: string;
  headerSize?: string;
  textColor?: string;
};

export const Container = styled.details<ExpanderStylingProps>`
  width: 100%;
  overflow: hidden;

  &.expander {
    &-enter {
      height: var(--first);
    }

    &-enter-active {
      height: var(--last);
      transition: height 300ms;
    }

    &-exit {
      height: var(--first);
    }

    &-exit-active {
      height: var(--last);
      transition: height 300ms;
    }
  }

  > summary {
    cursor: pointer;
    user-select: none;
    list-style-type: none;

    &:focus {
      outline: none;
    }

    &::marker {
      display: none;
    }

    &::-webkit-details-marker {
      display: none;
    }
  }

  > p {
    margin: 1rem 0 0;
  }

  .expander {
    &__content {
      display: flex;
      align-items: center;
    }

    &__icon {
      display: inline-block;
      margin-left: ${pxToRem('12px')};
      transition: transform 300ms;

      &--open {
        transform: rotateZ(180deg);
      }
    }
  }
`;
