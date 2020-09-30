import styled from 'styled-components';
import { pxToRem, marginChildren } from '@faxi/web-css-utilities';
import { ListView } from '../../_layouts/ListView';

export type ErrorStylingProps = {
  errorMessageTitleColor?: string;
  errorMessageDescriptionColor?: string;
  errorLinksPhoneColor?: string;
};

export const Error = styled.div`
  ${ListView(pxToRem('36px'), 'center', 'center')};
  text-align: center;
  height: 100%;

  .error {
    &__logo {
      justify-content: center;
    }

    &__message {
      ${marginChildren(`0 0 ${pxToRem('15px')} 0`)};
      font-weight: 500;

      &__title {
        color: ${(props: ErrorStylingProps) =>
          props.errorMessageTitleColor || 'black'};
        font-weight: 500;
      }

      &__description {
        font-size: ${pxToRem('20px')};
        color: ${(props: ErrorStylingProps) =>
          props.errorMessageDescriptionColor || 'black'};
      }
    }

    &__links {
      ${marginChildren(`0 0 ${pxToRem('15px')} 0`)};
      font-weight: 200;

      &__nav-links {
        font-size: ${pxToRem('20px')};
      }

      &__phone {
        font-size: ${pxToRem('20px')};
        color: ${(props: ErrorStylingProps) =>
          props.errorLinksPhoneColor || 'black'};
      }

      &__message {
        font-size: ${pxToRem('20px')};
      }
    }
  }
`;
