import React from 'react';
import * as Styled from './Footer.styles';
import NavigationLinks from '../../_molecules/NavigationLinks';
import Image from '../../_atoms/Image';

type Country = {
  name: string;
  code: string;
  translation_key: string;
  dial_code: string;
};

export type Platform = {
  id: number;
  name: string;
  domain: string;
  uri: string;
  default_language: string;
  default_country_code: string;
  available_languages: string[];
  countries: Country[];
};

export type NavLink = {
  name: string;
  route: string;
};

export type FooterProps = {
  logoSrc?: string;
  copyrights?: string;
  className?: string;
  secondaryLinks?: NavLink[];
};

const Footer: React.FC<FooterProps> = (props: FooterProps): JSX.Element => {
  const {
    logoSrc,
    copyrights,
    className,
    secondaryLinks = [{ name: '', route: '' }],
  } = props;

  return (
    <Styled.Footer className={className}>
      <div className="footer__container">
        {logoSrc && (
          <Image
            className="footer__container__logo"
            src={logoSrc}
            alt="Footer logo"
            width={'185px'}
            height={'95px'}
          />
        )}
        <div className="footer__container__links-and-rights">
          <NavigationLinks
            links={secondaryLinks}
            color="white"
            target={'_blank'}
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
