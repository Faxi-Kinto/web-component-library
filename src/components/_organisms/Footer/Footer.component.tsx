import React from 'react';
import * as Styled from './Footer.styles';
import NavigationLinks from '../../_molecules/NavigationLinks';
import Image from '../../_atoms/Image';
import { NavLink } from '../../_molecules/NavigationLinks/NavigationLinks.component';

export type FooterProps = {
  logoSrc?: string;
  copyrights?: string;
  className?: string;
  secondaryLinks?: NavLink[];
};

const Footer: React.FC<FooterProps> = (props: FooterProps): JSX.Element => {
  const {
    logoSrc = 'assets/icons/kinto.svg',
    copyrights,
    className,
    secondaryLinks = [{ name: '', route: '' }],
  } = props;

  return (
    <Styled.Footer className={className}>
      <div className="footer__container">
        <Image
          className="footer__container__logo"
          src={logoSrc}
          alt="Footer logo"
          width="185px"
          height="95px"
        />
        <div className="footer__container__links-and-rights">
          <NavigationLinks
            links={secondaryLinks}
            color="white"
            target="_blank"
          />
          {/* <SocialLinks
            iconSize={pxToRem(`${windowWidth > 768 ? '19px' : '32px'}`)}
            color={theme.palette.HALF_BAKED}
          /> */}
          <p className="footer__container__copyrights">{copyrights}</p>
        </div>
      </div>
    </Styled.Footer>
  );
};

export default Footer;
