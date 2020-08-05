import styled from 'styled-components';
import { pxToRem, padding } from '@faxi/web-css-utilities';

export type ExpanderStylingProps = {
  headerColor?: string;
  headerSize?: string;
  textColor?: string;
};

export const Container = styled.div<ExpanderStylingProps>`
  max-width: ${pxToRem('500px')};
  width: 100%;
  .expander-card {
    &__header {
      &__button {
        span {
          font-size: ${(props: ExpanderStylingProps) => props.headerSize};
          color: ${(props: ExpanderStylingProps) =>
            props.headerColor ? props.headerColor : 'black'};
        }
      }
      &__wrapper {
        position: relative;
        &__icon {
          position: absolute;
          top: ${pxToRem('-3px')};
          transition: all 400ms linear;
          &--open {
            transform: rotate(180deg);
          }
        }
      }
    }

    &__box {
      transition: height 300ms ease-in-out;
      height: 0;
      overflow: hidden;

      &--open {
        visibility: visible;
        height: ${pxToRem('150px')};
      }

      &__body {
        ${padding(pxToRem('35px'), '0')};
        color: ${(props: ExpanderStylingProps) =>
          props.textColor ? props.textColor : 'black'};
        transition: 300ms;
      }
    }
  }
`;
