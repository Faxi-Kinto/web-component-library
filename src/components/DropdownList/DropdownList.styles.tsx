import styled from 'styled-components';
import { theme } from '../../config';
import {
  positionAbsolute,
  boxShadow,
  padding,
  size,
  pxToRem,
  fontSize,
} from '../../styles/basics';
import { marginChildren } from '../../styles/spacings';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  ${marginChildren(`0 0 ${pxToRem('5px')} 0`)};

  .dropdown {
    &__label {
      color: ${theme.pallet.GRAY};
      display: flex;
      height: ${pxToRem('24px')};
      align-items: flex-end;
      ${fontSize('16px')};
    }

    &__select-wrapper {
      position: relative;
      width: 100%;

      &__select {
        width: 100%;
        height: ${pxToRem('45px')};
        ${padding(pxToRem('8px'), pxToRem('16px'))};

        opacity: 1;
        outline: none;
        background-color: ${theme.pallet.WHITE};
        font-size: ${pxToRem('14px')};
        appearance: none;
        ${boxShadow('8px', '8px', '20px', theme.pallet.SHADOW)};
        border: ${pxToRem('0.5px')} solid ${theme.pallet.DISABLED};
        border-radius: 0;

        &.select--error {
          border: ${pxToRem('0.5px')} solid ${theme.pallet.ERROR};
        }

        &:focus,
        &.select--error {
          box-shadow: none;
        }
      }
    }

    &__icon {
      ${positionAbsolute('', pxToRem('28px'), '50%', '')};
      transform: translateY(50%);
      ${size('fit-content')};
      pointer-events: none;
      color: ${theme.pallet.LIGHT_BLUE_2};
    }

    &__description-msg,
    &__error-msg {
      flex-basis: 100%;
      color: ${theme.pallet.DISABLED};
      line-height: ${pxToRem('20px')};
    }

    &__error-msg {
      font-size: ${pxToRem('14px')};
      color: ${theme.pallet.ERROR};
    }
  }

  &.dropdown {
    &--small {
      .dropdown__icon {
        ${positionAbsolute('', pxToRem('12px'), '50%', '')};
        ${size('fit-content')};
        ${fontSize('10px')};
        color: ${theme.pallet.GRAY_BLUE};
      }
    }
  }
`;
