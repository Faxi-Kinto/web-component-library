import * as React from 'react';
import * as Styled from './Icon.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mapNamePropToFaNames } from '../../Icon';
/**
 * @name Icon
 *
 * @returns {JSX}
 */

export type IconProps<T> = {
  name: T;
  size?: string;
  color?: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  id?: string;
};

const Icon = <T,>(props: IconProps<T>): JSX.Element => {
  const { size, color, name, className, onClick, id } = props;

  const iconName = mapNamePropToFaNames<T>(name);

  return (
    <Styled.Container
      id={id}
      size={size}
      className={className}
      onClick={onClick}
    >
      <FontAwesomeIcon color={color} size={'1x'} icon={iconName} />
    </Styled.Container>
  );
};

export default Icon;
