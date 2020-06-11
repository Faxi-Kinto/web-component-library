import * as React from 'react';
import * as Styled from './Icon.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mapNamePropToFaNames } from '../../../setupFontAwesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

/**
 * @name Icon
 *
 * [Insert Component Description]
 *
 * @returns {JSX}
 */

export type IconProps = {
  name: IconProp;
  size?: string;
  color?: string;
  className?: string;
};

const Icon: React.FC<IconProps> = (props: IconProps): JSX.Element => {
  const { size, color, name, className } = props;

  const iconName = mapNamePropToFaNames(name);

  return (
    <Styled.Container size={size} className={className}>
      <FontAwesomeIcon color={color} size={'1x'} icon={iconName} />
    </Styled.Container>
  );
};

export default Icon;
