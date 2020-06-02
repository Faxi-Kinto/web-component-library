import React, { useEffect, useState } from 'react';
import * as Styled from './Footer.styles';
import SubNavigation, { NavLink } from '../SubNavigation';
import SocialLinks from '../SocialLinks';
import Logo from '../Logo';
import { theme } from '../../config';
import { pxToRem } from '../../styles/basics';

export type FooterProps = {
  logoSrc?: string;
  copyrights?: string;
  className?: string;
};

const defaultLinks: NavLink[] = [
  { name: 'About', route: '' },
  { name: 'Pricing', route: '' },
  { name: 'FAQs', route: '' },
  { name: 'News', route: '' },
  { name: 'Contact us', route: '' },
];

const secondaryLinks: NavLink[] = [
  { name: 'Privacy Policy', route: '' },
  { name: 'Terms & Conditions', route: '' },
  { name: 'Cookie Policy', route: '' },
];

const Footer: React.FC<FooterProps> = (props: FooterProps): JSX.Element => {
  const {
    logoSrc = '/assets/images/Logo.png',
    copyrights = 'KINTO JOIN © 2020 All rights reserved\nto the KINTO GROUP',
    className,
  } = props;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // due to the fact that Links component manipulates the iconSize prop deep into its children
  // im avoiding a css solution in this component because I dont want to force properties from parent to a child
  // when a component isn't designed like that
  useEffect(() => {
    const handleBreakpoint = (): void => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleBreakpoint);
    return (): void => {
      window.removeEventListener('resize', handleBreakpoint);
    };
  }, []);

  return (
    <Styled.Footer className={className}>
      <div className="footer__container">
        <Logo
          className="footer__container__logo"
          src={logoSrc}
          alt="Logo"
          width={'100px'}
        />
        <div className="footer__container__left-content">
          <SubNavigation links={defaultLinks} colorType="light" />
          <SubNavigation secondary links={secondaryLinks} colorType="light" />
        </div>

        <div className="footer__container__right-content">
          <SocialLinks
            iconSize={pxToRem(`${windowWidth > 768 ? '19px' : '32px'}`)}
            color={theme.pallet.TURQUOISE}
          />
          <p className="footer__container__right-content__copyrights">
            {copyrights}
          </p>
        </div>
      </div>
    </Styled.Footer>
  );
};

export default Footer;
