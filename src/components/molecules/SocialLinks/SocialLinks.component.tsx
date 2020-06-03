import React from 'react';
import Icon from './../../atoms/Icon';
import Text from './../../atoms/Text';
import * as Styled from './SocialLinks.styles';
import { defaultFontSize } from '../../../styles/constants';

/**
 * @name SocialLinks
 *
 * [Insert Component Description]
 *
 * @returns {JSX}
 */

export type SocialLinksProps = {
  iconSize?: string;
  color?: string;
};

const SocialLinks: React.FC<SocialLinksProps> = (
  props: SocialLinksProps
): JSX.Element => {
  const { iconSize = defaultFontSize, color } = props;
  return (
    <Styled.Container iconSize={iconSize}>
      <Text.Link href="/" target="_blank">
        <Icon name="linkedin" size={iconSize} color={color} />
      </Text.Link>
      <Text.Link href="/" target="_blank">
        <Icon name="twitter" size={iconSize} color={color} />
      </Text.Link>
      <Text.Link href="/" target="_blank">
        <Icon name="instagram" size={iconSize} color={color} />
      </Text.Link>
    </Styled.Container>
  );
};

export default SocialLinks;
