import React, { useEffect, useState } from 'react';
import * as Styled from './Footer.styles';
import SubNavigation from '../../molecules/SubNavigation';
import SocialLinks from '../../molecules/SocialLinks';
import Logo from '../../atoms/Logo';
import { NavLink } from '../../molecules/SubNavigation';
import { theme } from '../../../config';
import { pxToRem } from '../../../styles/basics';
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';

export type FooterProps = {
  logoSrc?: string;
  copyrights?: string;
  className?: string;
};

const Footer: React.FC<FooterProps> = (props: FooterProps): JSX.Element => {
  const { t } = useTranslation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const date = new Date().getFullYear();

  const {
    logoSrc = '/assets/images/Logo.png',
    copyrights = parse(t('kintofooter_all_rights_reserved', { year: date })),
    className,
  } = props;

  const defaultLinks: NavLink[] = [
    { name: t('faxinav_about'), route: '' },
    { name: t('faxinav_pricing'), route: '' },
    { name: t('faqs'), route: '' },
    { name: t('faxinav_blog'), route: '' },
    { name: t('ContactUs'), route: '' },
  ];

  const secondaryLinks: NavLink[] = [
    { name: t('register_privacy_and_policy'), route: '' },
    { name: t('TermsCondition'), route: '' },
    { name: t('register_cookie_policy'), route: '' },
  ];

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
