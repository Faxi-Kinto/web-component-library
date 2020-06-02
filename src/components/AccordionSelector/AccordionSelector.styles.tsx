import styled, { css } from 'styled-components';
import { theme } from '../../config';
import { pxToRem } from '../../styles/basics';
import { phablet } from '../../styles/breakpoints';
import { padding } from '../../styles/basics';

export const Container = styled.div`
  width: ${pxToRem('430px')};
  background-color: ${theme.pallet.WHITE};
  border: 1px solid ${theme.pallet.DISABLED};

  > {
    &:nth-child(n + 2) {
      border-top: 1px solid ${theme.pallet.DISABLED};
    }
  }
  .option {
    cursor: pointer;
    ${padding(pxToRem('20px'), pxToRem('40px'), pxToRem('35px'))};
    min-height: ${pxToRem('100px')};
    &__radio-button {
      border: none;
      align-items: flex-start;
      height: ${pxToRem('40px')};
      span {
        color: ${theme.pallet.LIGHT_BLUE_2};
        /* TODO: remove font-weight when font is ready */
        font-weight: 500;
      }
      svg {
        margin-right: ${pxToRem('12px')};
        margin-left: 0;
      }
    }

    &__description {
      display: block;
      padding-left: 28px;
    }

    &--selected {
      .option__child-container {
        max-height: 100rem;
        transition: max-height 0.3s ease-in-out;
        > * {
          opacity: 1;
          transition: opacity 0.2s ease-in-out 0.3s;
          &:first-child {
            margin-top: 25px;
          }
        }
      }
    }

    &--not-selected {
      .option__radio-button {
        span {
          /* TODO: remove font-weight when font is ready */
          font-weight: 200;
        }
      }
      .option__description {
        color: ${theme.pallet.DISABLED};
      }
      .option__child-container {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.1s linear;
        > * {
          opacity: 0;
          transition-property: opacity;
        }
      }
    }
  }
  ${phablet(css`
    width: 100%;
    border: none;
    > {
    &:nth-child(n + 1) {
      border-top: 1px solid ${theme.pallet.DISABLED};
    }
    .option {
      ${padding(pxToRem('25px'), '0')};
      > * {
        padding-left:${pxToRem('30px')};
        padding-right:${pxToRem('40px')};
      }
    }
  `)};
`;
