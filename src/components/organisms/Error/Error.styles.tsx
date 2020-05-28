import styled from 'styled-components';
import { listView } from 'styles/containers';
import { pxToRem } from 'styles/fonts';
import { marginChildren } from 'styles/spacings';

export const Error = styled.div`
  ${listView(pxToRem('36px'), 'center', 'center')};
  text-align: center;
  height: 100%;

  .error {
    &__logo {
      justify-content: center;
    }

    &__message {
      ${marginChildren(`0 0 ${pxToRem('15px')} 0`)};

      &__description {
        font-size: ${pxToRem('18px')};
      }
    }

    &__links {
      ${marginChildren(`0 0 ${pxToRem('15px')} 0`)};
      font-weight: 200;

      &__message {
        font-size: ${pxToRem('18px')};
      }
    }
  }
`;
