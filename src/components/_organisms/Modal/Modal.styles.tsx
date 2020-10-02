import styled from 'styled-components';
import { positionAbsolute, size, flexColumn } from '@faxi/web-css-utilities';
import { modalZIndex } from '@faxi/web-css-utilities/constants';

export const ModalStyles = styled.div`
  ${positionAbsolute('0', '', '', '0')};
  z-index: ${modalZIndex};
  ${size('100%')};
  background-color: #00000050;
  display: flex;
  flex-direction: column;
  align-items: center;

  &.wcl-modal {
    &--banner {
      background: unset;
      height: fit-content;

      &.wcl-modal--top {
        /* unnecessary, defined by default */
      }

      &.wcl-modal--center {
        top: 50%;
      }

      &.wcl-modal--bottom {
        ${positionAbsolute('unset', '', '0', '0')};
      }
    }

    &--top {
      justify-content: flex-start;
    }

    &--center {
      justify-content: center;
    }

    &--bottom {
      justify-content: flex-end;
    }
  }

  .wcl-modal {
    &__content {
      position: relative;
      ${flexColumn()};
      background-color: white;
    }
  }
`;
