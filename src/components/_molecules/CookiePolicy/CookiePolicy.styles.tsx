import styled from 'styled-components';
import { pxToRem, padding } from '@faxi/web-css-utilities';

export const Container = styled.div`
  .cookie-policy {
    ${padding(pxToRem('20px'), pxToRem('50px'))};
    background-color: #00708d;

    &__title,
    &__text {
      display: block;
      margin-bottom: ${pxToRem('20px')};
      color: #fff;
    }

    &__btnF,
    &__btnS {
      display: inline-flex;
      justify-content: space-between;
      flex-direction: row;
      align-items: center;
      ${padding(pxToRem('10px'), pxToRem('35px'))};
      margin-right: ${pxToRem('20px')};
      background-color: #fff;
      color: #00708d;
    }
  }
`;
