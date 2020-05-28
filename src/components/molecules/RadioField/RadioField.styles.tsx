import styled from 'styled-components';
import { size } from 'styles/basics';
import { pxToRem } from 'styles/fonts';
import { defaultFontSize } from 'styles/constants';
import { flexRow } from 'styles/flex';
import { theme } from 'config';

export const Container = styled.label`
  position: relative;
  background: white;
  ${flexRow('initial', 'center')};
  font-size: ${pxToRem(defaultFontSize)};
  height: ${pxToRem('45px')};
  width: 100%;
  border: ${pxToRem('0.5px')} solid ${theme.pallet.DISABLED};
  box-sizing: border-box;
  cursor: pointer;

  input {
    display: none;
    &:checked {
      & + svg {
        .inner {
          display: block;
        }
        & + span {
          font-weight: 600;
        }
      }
    }
  }

  > svg {
    color: ${theme.pallet.TURQUOISE};
    margin: 0 ${pxToRem('16px')};

    &.lg {
      ${size(pxToRem('25px'))}
    }

    &.md {
      ${size(pxToRem('16px'))}
    }

    .inner {
      display: none;
      animation-name: animation-inner;
      animation-duration: 0.35s;
    }

    @keyframes animation-inner {
      0% {
        r: 45%;
      }
      100% {
        r: 30%;
      }
    }
  }
`;
