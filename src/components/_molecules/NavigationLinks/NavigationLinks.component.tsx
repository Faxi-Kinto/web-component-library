import React from 'react';
import * as Styled from './NavigationLinks.styles';
import classNames from 'classnames';

/**
 * @name NavigationLinks
 *
 * @returns {JSX}
 */

export type NavigationLinksProps = {
  className?: string;
  color: string;
  links: NavLink[];
  target?: string;
  vertical?: boolean;
};

export type NavLink = {
  id?: string;
  name: string;
  route: string;
};

const NavigationLinks: React.FC<NavigationLinksProps> = (
  props: NavigationLinksProps
): JSX.Element => {
  const { className, color, links, target, vertical } = props;
  return (
    <Styled.Nav
      className={classNames(['nav', { 'nav--vertical': vertical }, className])}
      color={color}
    >
      {links.map((link, index) => (
        <a key={index} id={link.id} href={link.route} target={target}>
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
