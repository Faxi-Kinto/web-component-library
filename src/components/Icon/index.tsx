import {
  library,
  IconProp,
  IconDefinition,
  IconPack,
} from '@fortawesome/fontawesome-svg-core';

export const setLibraries = (libraries: (IconDefinition | IconPack)[]) => {
  library.add(...libraries);
};

export let mapNamePropToFaNames = <T,>(_iconName: T): IconProp => {
  throw Error('Please provide your function');
};

export const setMapNamePropToFaNames = <T,>(
  customMapNamePropToFaNames: (iconName: T) => IconProp
) => {
  mapNamePropToFaNames = customMapNamePropToFaNames as <T>(
    iconName: T
  ) => IconProp;
};
