import React from 'react';
import * as Styled from './NavigationLinks.styles';

/**
 * @name NavigationLinks
 *
 * @returns {JSX}
 */
export type NavigationLinksProps = {
  links: NavLink[];
  secondary?: boolean;
  vertical?: boolean;
  color: string;
};

export type NavLink = {
  name: string;
  route: string;
};

const NavigationLinks: React.FC<NavigationLinksProps> = (
  props: NavigationLinksProps
): JSX.Element => {
  const { links, secondary, vertical, color } = props;
  return (
    <Styled.Nav
      className={`nav${secondary ? ' nav--secondary' : ''}${
        vertical ? ' nav--vertical' : ''
      }`}
      color={color}
    >
      {links.map((link, index) => (
        <a key={index} href={link.route}>
          <span>{link.name}</span>
          {index !== links.length - 1 ? (
            <span className="nav__delimiter">|</span>
          ) : null}
        </a>
      ))}
    </Styled.Nav>
  );
};

export default NavigationLinks;
