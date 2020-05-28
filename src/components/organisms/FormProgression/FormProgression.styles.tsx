import styled, { css } from 'styled-components';
import { flexColumn, flexRow } from 'styles/flex';
import { theme } from 'config';
import { positionAbsolute, size } from 'styles/basics';
import { pxToRem } from 'styles/fonts';
import { phablet } from 'styles/breakpoints';

export const Container = styled.div`
  ${flexColumn()};
  color: ${theme.pallet.LIGHT_BLUE};
  width: 100%;

  .progression {
    &__bar {
      background-color: ${theme.pallet.LIGHT_CYAN};
      border-radius: ${pxToRem('11px')};
      height: ${pxToRem('14px')};
      margin-bottom: ${pxToRem('12px')};

      &__filler {
        border-radius: ${pxToRem('11px')};
        height: ${pxToRem('14px')};
        background: rgb(0, 112, 141);
        background: linear-gradient(
          90deg,
          rgba(0, 112, 141, 1) 0%,
          rgba(129, 200, 209, 1) 100%
        );

        transition: width 0.25s ease-in-out;
        animation-name: fadeOutLeft;
        animation-duration: 0.3s;

        @keyframes fadeOutLeft {
          from {
            opacity: 1;
          }

          to {
            opacity: 0;
          }
        }
      }
    }

    &__stages {
      ${flexRow('space-between', 'flex-start')};

      &__stage {
        position: relative;
        width: 100%;
        padding-right: 5%;

        ${phablet(css`
          &:last-of-type {
            width: fit-content;
            padding-right: ${pxToRem('2px')};
          }
        `)}

        &__circle {
          ${positionAbsolute(`-${pxToRem('24px')}`, '', '', pxToRem('2px'))};

          &__empty {
            ${size('10px')};
            border: ${pxToRem('0.5px')} solid ${theme.pallet.GRAY_BLUE};
            background-color: white;
            border-radius: 50%;
          }
        }

        &__label {
          text-transform: uppercase;
          font-weight: bold;

          &__text {
            ${phablet(css`
              display: none;
            `)}
          }
        }

        &__name {
          ${phablet(css`
            display: none;
          `)}
        }
      }
    }
  }
`;
