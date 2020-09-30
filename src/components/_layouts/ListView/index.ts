import {
  JustifyContentTypes,
  AlignItemsTypes,
} from '@faxi/web-css-utilities/types';
import { ContentContainer } from '../ContentContainer';
import { marginChildren } from '@faxi/web-css-utilities';

export const ListView = (
  childSpacing = '0',
  justifyContent: JustifyContentTypes = 'initial',
  alignItems: AlignItemsTypes = 'flex-start'
): string => {
  return `
    ${ContentContainer('100%', 'column', justifyContent, alignItems)};
    width: 100%;
    ${childSpacing !== '0' ? marginChildren(`0 0 ${childSpacing} 0`) : ''};
  `;
};
