import styled from 'styled-components';
import { pxToRem } from '../../styles/basics';
import { theme } from '../../config';

export const Container = styled.div`
  line-height: ${pxToRem('20px')};

  .checkbox-field {
    &__description,
    &__error-msg {
      margin-top: ${pxToRem('20px')};
      padding-right: ${pxToRem('50px')};
      font-size: ${pxToRem('14px')};

      &__description {
        display: block;
      }

      &__error-msg {
        color: ${theme.pallet.ERROR};
      }
    }
  }
`;
