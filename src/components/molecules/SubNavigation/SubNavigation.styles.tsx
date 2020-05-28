import styled, { css } from 'styled-components';
import { theme } from 'config';
import { pxToRem } from 'styles/fonts';
import { phablet } from 'styles/breakpoints';
import { flexColumn } from 'styles/flex';
import { marginChildren } from 'styles/spacings';
import { listView } from 'styles/containers';

export const Nav = styled.nav`
  ${phablet(css`
    ${flexColumn('center', 'flex-start')};
    ${marginChildren(`0 0 ${pxToRem('24px')} 0`)};
  `)};
  > a {
    color: ${theme.pallet.LIGHT_GRAY};
    font-weight: 500;
    text-decoration: none;

    span {
      &:first-child {
        padding-right: 6px;
      }
    }
    &:not(:last-child) {
      margin-right: 6px;
    }
  }

  &.nav {
    &--light {
      > a {
        color: ${theme.pallet.WHITE};
      }
    }

    &--dark {
      > a {
        color: ${theme.pallet.GRAY_BLUE};
      }
    }

    &--vertical {
      ${listView(pxToRem('15px'), 'center', 'center')};
      text-decoration: underline;
      font-size: ${pxToRem('18px')};

      > a {
        font-weight: inherit;
      }

      .nav__delimiter {
        display: none;
      }
    }

    &--secondary {
      a {
        font-weight: normal;

        span {
          font-size: ${pxToRem('14px')};
          color: ${theme.pallet.LIGHT_GRAY};
        }
      }
    }
  }

  .nav__delimiter {
    ${phablet(css`
      display: none;
    `)};
  }
`;
