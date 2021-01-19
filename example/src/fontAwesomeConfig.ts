import {
  setLibraries,
  setMapNamePropToFaNames,
  Icon,
  IconProps,
} from 'web-component-library';
import { IconPack, IconProp } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

setLibraries([fab, far] as IconPack[]);

export type IName = 'twitter' | 'eye';

const customMapNameToFa = (iconName: IName): IconProp => {
  switch (iconName) {
    case 'twitter':
      return ['fab', 'twitter'];

    case 'eye':
      return ['far', 'eye'];

    default:
      return ['far', 'eye'];
  }
};

setMapNamePropToFaNames(customMapNameToFa);

export default Icon as React.FC<IconProps<IName>>;
