import {
  JustifyContentTypes,
  AlignItemsTypes,
  FlexDirections,
  cssUnitsRegex,
} from './helpers';
import { flexRow, flexColumn } from './flex';
import { marginChildren } from './spacings';
import styled, { css } from 'styled-components';
import { phablet } from './breakpoints';
import { theme } from '../config';
import { padding, pxToRem } from './basics';

export const contentContainer = (
  directChildWidth = '100%',
  flexDirection: FlexDirections = 'row',
  justifyContent: JustifyContentTypes = 'initial',
  alignItems: AlignItemsTypes = 'initial'
): string => {
  if (cssUnitsRegex.test(directChildWidth)) {
    return `
        ${
          flexDirection === 'row'
            ? flexRow(justifyContent, alignItems)
            : flexColumn(justifyContent, alignItems)
        };
        > :first-child {
            max-width: ${directChildWidth};
            width: 100%;
        }
        `;
  }
  return '';
};

export const listView = (
  childSpacing = '0',
  justifyContent: JustifyContentTypes = 'initial',
  alignItems: AlignItemsTypes = 'flex-start'
): string => {
  return `
  ${contentContainer('100%', 'column', justifyContent, alignItems)};
  width: 100%;
  ${childSpacing !== '0' ? marginChildren(`0 0 ${childSpacing} 0`) : ''};
`;
};

export const TemplateGrid = styled.div`
  display: grid;
  grid-template-columns: auto 0.7fr auto;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    '. top .'
    '. center .'
    '. bottom .';
  min-height: 100%;

  ${phablet(
    css`
      grid-template-columns: 1fr;
      grid-template-areas:
        'top'
        'center'
        'bottom';
    `
  )}

  .template {
    &__header {
      grid-area: top;
      padding: ${pxToRem('24px')} 0;
      ${marginChildren(`0 0 ${pxToRem('24px')} 0`)};
      display: grid;

      &__button {
        justify-self: end;
      }

      &__progress {
        justify-self: center;
      }

      ${phablet(
        css`
          ${padding(pxToRem('24px'), pxToRem('12px'))};
        `
      )}
    }

    &__hero-image {
      grid-area: 2 / 1 / 3 / 4;
      ${phablet(
        css`
          display: none;
        `
      )}
    }

    &__children {
      grid-area: center;
      display: grid;

      &--end {
        justify-content: end;
      }

      ${phablet(css`
        display: block;
      `)};

      &__background {
        background: rgba(255, 255, 255, 0.95);
        height: 100%;

        &--asymmetric-small {
          width: ${pxToRem('576px')};
          ${padding(
            pxToRem('24px'),
            pxToRem('145px'),
            pxToRem('40px'),
            pxToRem('80px')
          )};
        }

        ${phablet(
          css`
            ${padding('0', pxToRem('30px'), pxToRem('30px'))};
            width: 100%;
          `
        )};
      }
    }

    &__footer-background {
      grid-area: 3 / 1 / 3 / 4;
      background-color: ${theme.pallet.LIGHT_BLUE};
      ${phablet(
        css`
          margin-top: ${pxToRem('60px')};
        `
      )}
    }

    &__footer {
      ${phablet(
        css`
          margin-top: ${pxToRem('60px')};
        `
      )}
      grid-area: bottom;
    }
  }
`;
