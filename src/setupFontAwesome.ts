import {
  library,
  IconProp,
  IconDefinition,
  IconPack,
} from '@fortawesome/fontawesome-svg-core';

export const setLibraries = (libraries: (IconDefinition | IconPack)[]) => {
  library.add(...libraries);
};

export let mapNamePropToFaNames = (_iconName: any): IconProp => {
  throw 'Please provide your function';
};

export const setMapNamePropToFaNames = (
  customMapNamePropToFaNames: (iconName: any) => IconProp
) => {
  mapNamePropToFaNames = customMapNamePropToFaNames;
};
