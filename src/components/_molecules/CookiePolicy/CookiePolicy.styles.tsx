import styled from 'styled-components';
import { pxToRem, padding, flexRow } from '@faxi/web-css-utilities';

type CookiePolicyStylingProps = {
  backgroundColor?: string;
  textColor?: string;
  buttonColor?: string;
  buttonBackground?: string;
};

export const Container = styled.div`
  .cookie-policy {
    ${flexRow('center', 'center')};
    ${padding(pxToRem('20px'), pxToRem('50px'))};
    background-color: ${(props: CookiePolicyStylingProps) =>
      `${props.backgroundColor}`};

    &__body {
      margin-right: ${pxToRem('35px')};
      &__text,
      &__text > * {
        color: ${(props: CookiePolicyStylingProps) => `${props.textColor}`};
      }
    }

    &__accept-button,
    &__decline-button {
      white-space: nowrap;
      background-color: ${(props: CookiePolicyStylingProps) =>
        `${props.buttonBackground}`};
      color: ${(props: CookiePolicyStylingProps) => `${props.buttonColor}`};
    }
  }
`;
