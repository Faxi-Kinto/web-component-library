import styled from 'styled-components';
import { flexRow, pxToRem } from '@faxi/web-css-utilities';

export const Dropdown = styled.div`
  cursor: pointer;
  user-select: none;

  .wcl-dropdown {
    &__heading {
      ${flexRow('space-between', 'center')};
      font-weight: bold;
      font-size: ${pxToRem('16px')};
      padding: ${pxToRem('16px')} ${pxToRem('24px')};
    }

    &__options {
      &--select {
        position: absolute;
        width: 100%;
      }

      &__option {
        padding: ${pxToRem('24px')};
        font-weight: 500;
        position: relative;
        overflow: hidden;
      }
    }
  }

  &.wcl-dropdown {
    &--select {
      position: relative;
    }
  }
`;
