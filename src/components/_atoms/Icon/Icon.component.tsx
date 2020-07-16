import * as React from 'react';
import * as Styled from './Icon.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mapNamePropToFaNames } from '../../Icon';
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
  onClick?: Function;
};

const Icon = <T,>(props: IconProps<T>): JSX.Element => {
  const { size, color, name, className, onClick } = props;

  const iconName = mapNamePropToFaNames<T>(name);

  return (
    <Styled.Container
      size={size}
      className={className}
      onClick={onClick && onClick()}
    >
      <FontAwesomeIcon color={color} size={'1x'} icon={iconName} />
    </Styled.Container>
  );
};

export default Icon;
