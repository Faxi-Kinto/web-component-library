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

  &.animate-on-height {
    transition: height 300ms;
  }

  > summary {
    cursor: pointer;
    user-select: none;
    list-style-type: none;
    display: flex;
    align-items: center;

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
