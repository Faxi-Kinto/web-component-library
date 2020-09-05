import React from 'react';
import * as Styled from './NavigationLinks.styles';
import classNames from 'classnames';

/**
 * @name NavigationLinks
 *
 * @returns {JSX}
 */

export type NavigationLinksProps = {
  links: NavLink[];
  vertical?: boolean;
  color: string;
  className?: string;
};

export type NavLink = {
  name: string;
  route: string;
};

const NavigationLinks: React.FC<NavigationLinksProps> = (
  props: NavigationLinksProps
): JSX.Element => {
  const { links, vertical, color, className } = props;
  return (
    <Styled.Nav
      className={classNames(['nav', { 'nav--vertical': vertical }, className])}
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
