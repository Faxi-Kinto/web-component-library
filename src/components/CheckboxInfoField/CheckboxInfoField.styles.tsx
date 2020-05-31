import styled from 'styled-components';
import { pxToRem } from '../../styles/basics';
import { theme } from '../../config';
import { padding } from '../../styles/basics';

export const Container = styled.div`
  line-height: ${pxToRem('20px')};
  border-bottom: ${pxToRem('1px')} solid ${theme.pallet.ACCENT_1};
  margin-bottom: ${pxToRem('42px')};

  .checkbox-info-field {
    &__error-msg {
      padding-right: ${pxToRem('50px')};
      font-size: ${pxToRem('14px')};
      color: ${theme.pallet.ERROR};
    }
    &__selected {
      color: ${theme.pallet.LIGHT_BLUE_2};
    }
    &__privacy-title {
      margin-bottom: ${pxToRem('30px')};
      font-weight: 500;
      max-width: ${pxToRem('315px')};
    }
    &__privacy-body {
      margin-bottom: ${pxToRem('42px')};
      display: block;
      ${padding('0', pxToRem('28px'), '0', '0')};
      font-size: ${pxToRem('14px')};
    }
  }
  &.checkbox-info-field__no-border {
    border-bottom: none;
  }
`;
