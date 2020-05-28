import styled from 'styled-components';
import { pxToRem } from 'styles/fonts';
import { theme } from 'config';

export const Container = styled.div`
  line-height: ${pxToRem('20px')};
  border-bottom: 1px solid ${theme.pallet.ACCENT_1};
  padding-bottom: 40px;
  .checkbox-info-field {
    &__error-msg {
      padding-right: 50px;
      font-size: ${pxToRem('14px')};
      color: ${theme.pallet.ERROR};
    }
    &__selected {
      color: ${theme.pallet.LIGHT_BLUE_2};
    }
    &__privacy-title {
      margin-bottom: 30px;
      font-weight: 500;
      max-width: 315px;
    }
    &__privacy-body {
      margin-bottom: 20px;
      display: block;
      padding: 0 28px 0 0;
      font-size: ${pxToRem('14px')};
    }
  }
  &.checkbox-info-field__no-border {
    border-bottom: none;
  }
`;
