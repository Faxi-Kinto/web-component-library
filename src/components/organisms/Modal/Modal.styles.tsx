import styled from 'styled-components';
import { theme } from 'config';
import { size, positionAbsolute } from 'styles/basics';
import { pxToRem, fontSize } from 'styles/fonts';
import { zindexModal } from 'styles/constants';
import { flexRow, flexColumn } from 'styles/flex';

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
        height: 55px;
        background-color: ${theme.pallet.LIGHT_BLUE};
        font-size: ${pxToRem('20px')};
        color: white;
        padding-left: 45px;
        ${flexRow('initial', 'center')};
      }

      &__body {
        flex-grow: 1;
        text-align: left;
        padding-left: 45px;
        padding-top: 27px;
        padding-right: 60px;
        ${fontSize('16px', '20px')};
        font-weight: lighter;
        letter-spacing: 0;
        color: ${theme.pallet.GRAY_BLUE_2};
      }

      &__line {
        background-color: ${theme.pallet.GRAY_BLUE_2};
        height: 0.25px;
        margin: 0;
        width: 100%;
        border-width: 0.02em;
        border-right: 0;
      }

      &__footer {
        height: 102px;
        ${flexRow('flex-end', 'center')};
        padding-right: 35px;
        button {
          width: 205px;
        }
      }
    }
  }
`;
