import {
  FlexDirections,
  JustifyContentTypes,
  AlignItemsTypes,
} from '@faxi/web-css-utilities/types';
import { cssUnitsRegex } from '@faxi/web-css-utilities/helpers';
import { flexRow, flexColumn } from '@faxi/web-css-utilities';

export const ContentContainer = (
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
