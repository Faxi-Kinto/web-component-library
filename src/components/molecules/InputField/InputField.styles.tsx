import styled from 'styled-components';
import { theme } from 'config';
import { pxToRem } from 'styles/fonts';
import { marginChildren } from 'styles/spacings';

export const Container = styled.div`
  ${marginChildren(`0 0 ${pxToRem('10px')} 0`)};

  .input {
    &__description-msg {
      color: ${theme.pallet.DISABLED};
      line-height: ${pxToRem('20px')};
    }

    &__error-msg {
      font-size: ${pxToRem('14px')};
      color: ${theme.pallet.ERROR};
    }
  }
`;
