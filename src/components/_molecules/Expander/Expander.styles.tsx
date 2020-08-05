import styled from 'styled-components';
import { pxToRem, padding } from '@faxi/web-css-utilities';

type ExpanderStylingProps = {
  headerColor?: string;
  headerSize?: string;
  textColor?: string;
};

const defaultTextColor = '#4E606A';
const defaultheaderSize = '18px';

export const Container = styled.div`
  max-width: ${pxToRem('500px')};
  width: 100%;
  .collapse-card {
    &__header {
      &__button {
        font-size: ${(props: ExpanderStylingProps) =>
          props.headerSize ? props.headerSize : defaultheaderSize};
        color: ${(props: ExpanderStylingProps) =>
          props.headerColor ? props.headerColor : defaultTextColor};
      }
      &__icon {
        position: relative;
        & > :last-child {
          position: absolute;
          top: ${pxToRem('-3px')};
          transition: all 400ms linear;
        }

        &--open {
          & > :last-child {
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
          props.textColor ? props.textColor : defaultTextColor};
        transition: 300ms;
      }
    }
  }
`;
