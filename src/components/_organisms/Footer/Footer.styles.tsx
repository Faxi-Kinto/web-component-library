import styled, { css } from 'styled-components';
import { pxToRem } from '@faxi/web-css-utilities';
import { flexRow, flexColumn } from '@faxi/web-css-utilities';
import { marginChildren } from '@faxi/web-css-utilities';
import { phablet, laptop } from '@faxi/web-css-utilities/breakpoints';

export const Footer = styled.footer`
  background-color: inherit;
  font-size: ${pxToRem('19px')};

  .footer {
    &__container {
      ${flexColumn('space-between')};
      ${phablet(css`
        ${flexColumn('initial', 'initial')};
        ${marginChildren(`0 0 ${pxToRem('40px')} 0`)};
      `)}

      &__logo {
        margin-bottom: ${pxToRem('45px')};
        ${laptop(css`
          width: ${pxToRem('150px')};
          height: ${pxToRem('75px')};
        `)};
        ${phablet(css`
          width: ${pxToRem('100px')};
          height: ${pxToRem('50px')};
        `)};
      }

      &__links-and-rights {
        ${flexRow('space-between')};
        ${marginChildren(`0 0 ${pxToRem('50px')} 0`)};
        color: white;

        ${laptop(css`
          font-size: ${pxToRem('16px')};
        `)};
        ${phablet(css`
          ${flexColumn('initial', 'flex-start')};
          font-size: ${pxToRem('14px')};
        `)};
      }

      &__copyrights {
        white-space: pre-wrap;
        text-align: right;
        font-size: ${pxToRem('19px')};

        ${laptop(css`
          font-size: ${pxToRem('16px')};
        `)};
        ${phablet(css`
          text-align: center;
          width: 100%;
          font-size: ${pxToRem('14px')};
        `)};
      }
    }
  }
`;
