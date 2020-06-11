import * as React from 'react';
import * as Styled from './Icon.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { mapNamePropToFaNames } from '../../../setupFontAwesome';

/**
 * @name Icon
 *
 * [Insert Component Description]
 *
 * @returns {JSX}
 */

export type IconProps<T> = {
  name: T;
  size?: string;
  color?: string;
  className?: string;
};

function Icon<T = IconName>(props: IconProps<T>): JSX.Element {
  const { size, color, name, className } = props;

  const iconName = mapNamePropToFaNames<T>(name);

  return (
    <Styled.Container size={size} className={className}>
      <FontAwesomeIcon color={color} size={'1x'} icon={iconName} />
    </Styled.Container>
  );
}

export default Icon;
