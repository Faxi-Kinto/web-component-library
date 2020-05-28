import styled from 'styled-components';
import { pxToRem } from 'styles/fonts';
import { theme } from 'config';

export const Container = styled.div`
  line-height: ${pxToRem('20px')};

  .checkbox-field__description,
  .checkbox-field__error-msg {
    margin-top: 20px;
    padding-right: 50px;
    font-size: ${pxToRem('14px')};
  }
  .checkbox-field__description {
    display: block;
  }
  .checkbox-field__error-msg {
    color: ${theme.pallet.ERROR};
  }
`;
