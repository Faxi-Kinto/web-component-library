import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, IconProp } from '@fortawesome/fontawesome-svg-core';
import { fad } from '@fortawesome/pro-duotone-svg-icons';
import { fal } from '@fortawesome/pro-light-svg-icons';
import { fas } from '@fortawesome/pro-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import * as Styled from './Icon.styles';

/**
 * @name Icon
 *
 * [Insert Component Description]
 *
 * @returns {JSX}
 */

library.add(fal, fab, fad, fas, far);

export type IconName =
  | 'caps-lock'
  | 'check-circle'
  | 'chevron-down'
  | 'chevron-left'
  | 'copyright'
  | 'correct'
  | 'eye-slash'
  | 'eye'
  | 'frown'
  | 'incorrect'
  | 'instagram'
  | 'linkedin'
  | 'question-circle'
  | 'times'
  | 'twitter'
  | 'user-tie';

export type IconProps = {
  name: IconName;
  size?: string;
  color?: string;
  className?: string;
};

function mapNamePropToFaNames(iconName: IconName): IconProp {
  switch (iconName) {
    case 'question-circle':
      return ['fal', 'question-circle'];

    case 'twitter':
      return ['fab', 'twitter'];

    case 'copyright':
      return ['fal', 'copyright'];

    case 'caps-lock':
      return ['fas', 'arrow-up'];

    case 'eye':
      return ['far', 'eye'];

    case 'eye-slash':
      return ['far', 'eye-slash'];

    case 'user-tie':
      return ['fas', 'user-tie'];

    case 'times':
      return ['fas', 'times'];

    case 'instagram':
      return ['fab', 'instagram'];

    case 'linkedin':
      return ['fab', 'linkedin'];

    case 'chevron-down':
      return ['fas', 'chevron-down'];

    case 'chevron-left':
      return ['fas', 'chevron-left'];

    case 'check-circle':
      return ['fas', 'check-circle'];

    case 'correct':
      return ['fas', 'check'];

    case 'incorrect':
      return ['fas', 'times'];

    case 'frown':
      return ['fas', 'frown'];

    default:
      return ['fal', 'question-circle'];
  }
}

const Icon: React.FC<IconProps> = (props: IconProps): JSX.Element => {
  const { size, color, name, className } = props;

  const iconName = mapNamePropToFaNames(name);

  return (
    <Styled.Container size={size} className={className}>
      <FontAwesomeIcon color={color} size={'1x'} icon={iconName} />
    </Styled.Container>
  );
};

export type IconSetProps = {
  size: string;
};

export const IconSet: React.FC<IconSetProps> = (
  props: IconSetProps
): JSX.Element => {
  return (
    <Styled.IconSet>
      <Icon name="caps-lock" size={props.size} />
      <Icon name="chevron-down" size={props.size} />
      <Icon name="chevron-left" size={props.size} />
      <Icon name="copyright" size={props.size} />
      <Icon name="correct" size={props.size} />
      <Icon name="eye-slash" size={props.size} />
      <Icon name="eye" size={props.size} />
      <Icon name="incorrect" size={props.size} />
      <Icon name="instagram" size={props.size} />
      <Icon name="linkedin" size={props.size} />
      <Icon name="question-circle" size={props.size} />
      <Icon name="times" size={props.size} />
      <Icon name="twitter" size={props.size} />
      <Icon name="user-tie" size={props.size} />
    </Styled.IconSet>
  );
};

export default Icon;
