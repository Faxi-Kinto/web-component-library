import styled from 'styled-components';
import { pxToRem, padding } from '@faxi/web-css-utilities';

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
    ${padding(pxToRem('35px'), '0')};
    margin: 0;
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
