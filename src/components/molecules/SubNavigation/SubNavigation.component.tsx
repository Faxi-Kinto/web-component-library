import React from 'react';
import * as Styled from './SubNavigation.styles';
import { NavLink } from './';

/**
 * @name SubNavigation
 *
 * Straightforward subNavigation
 *
 * @returns {JSX}
 */
export type SubNavigationProps = {
  links: NavLink[];
  secondary?: boolean;
  vertical?: boolean;
  colorType?: 'light' | 'dark';
};

const SubNavigation: React.FC<SubNavigationProps> = (
  props: SubNavigationProps
): JSX.Element => {
  const { links, secondary, vertical, colorType } = props;
  return (
    <Styled.Nav
      className={`nav${secondary ? ' nav--secondary' : ''}${
        vertical ? ' nav--vertical' : ''
      }${colorType ? ` nav--${colorType}` : ''}`}
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

export default SubNavigation;
