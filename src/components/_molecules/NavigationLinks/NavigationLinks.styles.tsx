import styled, { css } from 'styled-components';
import { pxToRem } from '@faxi/web-css-utilities';
import { phablet } from '@faxi/web-css-utilities/breakpoints';
import { flexColumn } from '@faxi/web-css-utilities';
import { marginChildren } from '@faxi/web-css-utilities';

type NavigationLinksStylingProps = {
  color: string;
};

export const Nav = styled.nav`
  ${phablet(css`
    ${flexColumn('center', 'flex-start')};
    ${marginChildren(`0 0 ${pxToRem('24px')} 0`)};
  `)};

  > a {
    color: ${(props: NavigationLinksStylingProps) => props.color};
    font-weight: 500;
    font-size: inherit;
    text-decoration: none;

    span {
      &:first-child {
        padding-right: ${pxToRem('6px')};
      }
    }
    &:not(:last-child) {
      margin-right: ${pxToRem('6px')};
    }
  }

  &.nav {
    &--vertical {
      ${marginChildren(`0 0 ${pxToRem('15px')} 0`)};
      ${flexColumn('center', 'center')};

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
      > a {
        font-weight: normal;
        font-size: ${pxToRem('14px')};
      }
    }
  }

  .nav__delimiter {
    ${phablet(css`
      display: none;
    `)};
  }
`;
