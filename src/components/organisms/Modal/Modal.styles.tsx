import styled from 'styled-components';
import {
  positionAbsolute,
  size,
  flexColumn,
  pxToRem,
} from '@faxi/web-css-utilities';
import { modalZIndex } from '@faxi/web-css-utilities/constants';

export const Container = styled.div`
  ${positionAbsolute('0', '', '', '0')};
  z-index: ${modalZIndex};
  ${size('100%')};
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
    background-color: #00000050;

    &__content {
      position: relative;
      ${size(pxToRem('725px'), pxToRem('310px'))};
      ${flexColumn()};
      background-color: white;
    }
    .center {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .top-center {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;
