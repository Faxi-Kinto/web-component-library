import styled from 'styled-components';
import { theme } from '../../../config';
import {
  size,
  positionAbsolute,
  padding,
  pxToRem,
  fontSize,
} from '../../../styles/basics';
import { zindexModal } from '../../../styles/constants';
import { flexRow, flexColumn } from '../../../styles/flex';

export const Container = styled.div`
  ${positionAbsolute('0', '', '', '0')};
  z-index: ${zindexModal};
  width: 100vw;
  height: 100vh;
  /* In case we have nested modals */
  & + div {
    opacity: 1;
  }
  .modal-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1001;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
    background-color: ${theme.pallet.GRAY_SHADOW};

    &__content {
      position: relative;
      background-color: ${theme.pallet.WHITE};
      ${size('725px', '310px')};
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      ${flexColumn()};

      &__header {
        height: ${pxToRem('55px')};
        background-color: ${theme.pallet.LIGHT_BLUE};
        font-size: ${pxToRem('20px')};
        color: white;
        padding-left: ${pxToRem('45px')};
        ${flexRow('initial', 'center')};
      }

      &__body {
        flex-grow: 1;
        text-align: left;
        ${padding(pxToRem('27px'), pxToRem('60px'), '0', pxToRem('45px'))};
        ${fontSize('16px', '20px')};
        font-weight: lighter;
        letter-spacing: 0;
        color: ${theme.pallet.GRAY_BLUE_2};
      }

      &__line {
        background-color: ${theme.pallet.GRAY_BLUE_2};
        height: ${pxToRem('0.25px')};
        margin: 0;
        width: 100%;
        border-width: 0.02em;
        border-right: 0;
      }

      &__footer {
        height: ${pxToRem('102px')};
        ${flexRow('flex-end', 'center')};
        padding-right: ${pxToRem('35px')};
        button {
          width: ${pxToRem('205px')};
        }
      }
    }
  }
`;
