import styled, { css } from 'styled-components';
import { pxToRem } from '@faxi/web-css-utilities';
import { phablet } from '@faxi/web-css-utilities/breakpoints';
import { flexColumn } from '@faxi/web-css-utilities';
import { marginChildren } from '@faxi/web-css-utilities';

export const Nav = styled.nav`
  ${phablet(css`
    ${flexColumn('center', 'flex-start')};
    ${marginChildren(`0 0 ${pxToRem('24px')} 0`)};
  `)};

  > a {
    text-decoration: none;

    span {
      &:first-child {
        padding-right: ${pxToRem('15px')};
      }
    }
    &:not(:last-child) {
      margin-right: ${pxToRem('15px')};
    }
  }

  &.nav {
    &--vertical {
      ${marginChildren(`0 0 ${pxToRem('15px')} 0`)};
      ${flexColumn('center', 'center')};
      text-decoration: underline;

      .nav__delimiter {
        display: none;
      }
    }
  }

  .nav__delimiter {
    ${phablet(css`
      display: none;
    `)};
  }
`;
