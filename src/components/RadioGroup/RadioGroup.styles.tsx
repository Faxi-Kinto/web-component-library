import styled from 'styled-components';
import { marginChildren } from '../../styles/spacings';
import { pxToRem } from '../../styles/basics';
import { theme } from '../../config';

export const Container = styled.div`
  ${marginChildren(`0 0 ${pxToRem('30px')} 0`)};

  .input {
    &__description-msg {
      margin-top: ${pxToRem('15px')};
      color: ${theme.pallet.LIGHT_GRAY};
      line-height: ${pxToRem('20px')};
    }
  }

  .radio-group {
    &__label {
      font-size: ${pxToRem('16px')};
      font-weight: 500;
      color: ${theme.pallet.LIGHT_BLUE};
    }

    &__container {
      > {
        &:nth-of-type(n + 2) {
          border-top: 0;
        }
      }
    }
  }
`;
