import { JustifyContentTypes, AlignItemsTypes } from './helpers';

export const flexRow = (
  justifyContent: JustifyContentTypes = 'initial',
  alignItems: AlignItemsTypes = 'initial',
  reverse = false
): string => {
  return `
        display: flex;
        flex-direction: ${reverse ? 'row-reverse' : 'row'};
        justify-content: ${justifyContent};
        align-items: ${alignItems}; 
    `;
};

export const flexColumn = (
  justifyContent: JustifyContentTypes = 'initial',
  alignItems: AlignItemsTypes = 'initial',
  reverse = false
): string => {
  return `
          display: flex;
          flex-direction: ${reverse ? 'column-reverse' : 'column'};
          justify-content: ${justifyContent};
          align-items: ${alignItems}; 
      `;
};
