import styled from 'styled-components';
import { pxToRem, padding } from '@faxi/web-css-utilities';

type CookiePolicyStylingProps = {
  bgColor?: string;
  textColor?: string;
  buttonColor?: string;
  buttonBackground?: string;
};

export const Container = styled.div`
  .cookie-policy {
    ${padding(pxToRem('20px'), pxToRem('50px'))};
    background-color: ${(props: CookiePolicyStylingProps) =>
      `${props.bgColor}`};

    &__title,
    &__text {
      display: block;
      margin-bottom: ${pxToRem('20px')};
      color: ${(props: CookiePolicyStylingProps) => `${props.textColor}`};
    }

    &__accept-button,
    &__decline-button {
      ${padding(pxToRem('10px'), pxToRem('35px'))};
      margin-right: ${pxToRem('20px')};
      background-color: ${(props: CookiePolicyStylingProps) =>
        `${props.buttonBackground}`};
      color: ${(props: CookiePolicyStylingProps) => `${props.buttonColor}`};
    }
  }
`;
