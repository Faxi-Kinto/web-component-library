import styled, { css } from 'styled-components';
import { pxToRem } from '../../styles/basics';
import { flexRow, flexColumn } from '../../styles/flex';
import { marginChildren } from '../../styles/spacings';
import { phablet } from '../../styles/breakpoints';
import { padding } from '../../styles/basics';

export const Footer = styled.footer`
  background-color: inherit;

  .footer {
    &__container {
      ${flexRow('space-between', 'center')};
      position: relative;
      height: ${pxToRem('160px')};
      padding-top: ${pxToRem('50px')};

      ${phablet(css`
        ${flexColumn('initial', 'initial')};
        height: fit-content;
        ${padding(pxToRem('80px'), pxToRem('32px'), pxToRem('32px'))};
        ${marginChildren(`0 0 ${pxToRem('36px')} 0`)};
      `)}

      &__logo {
        position: absolute;
        top: 0;
        left: 0;
        transform: translateY(-50%);

        ${phablet(css`
          left: ${pxToRem('32px')};
        `)};
      }

      &__left-content {
        ${marginChildren(`0 0 ${pxToRem('24px')} 0`)};
        ${phablet(css`
          ${marginChildren(`0 0 ${pxToRem('60px')} 0`)};
        `)};
      }

      &__right-content {
        ${flexColumn('center', 'flex-end')};
        ${marginChildren(`0 0 ${pxToRem('20px')} 0`)};
        color: white;

        ${phablet(css`
          ${flexColumn('center', 'center')};
          text-align: center;
        `)};

        &__copyrights {
          white-space: pre-wrap;
          text-align: right;
          font-size: ${pxToRem('14px')};

          ${phablet(css`
            text-align: center;
          `)};
        }
      }
    }
  }
`;
