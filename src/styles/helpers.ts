export const cssUnitsRegex = RegExp(
  '^[0-9]*.?[1-9]*(cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%)$'
);

export type FlexDirections = 'row' | 'column';

export type AlignItemsTypes =
  | 'stretch'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'initial'
  | 'inherit';

export type JustifyContentTypes =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'initial'
  | 'inherit';
