import React from 'react';
import * as Styled from './Error.styles';
import { Text, SubNavigation, Icon } from 'components';
import { NavLink } from 'components/molecules/SubNavigation';
import { pxToRem } from 'styles/fonts';
import { theme } from 'config';

const errorLinks: NavLink[] = [
  { name: 'Home', route: '' },
  { name: 'About', route: '' },
  { name: 'Enterprise', route: '' },
  { name: 'FAQ', route: '' },
];

const Error: React.FC = (): JSX.Element => {
  return (
    <Styled.Error className="error">
      <Icon
        name="frown"
        className="error__logo"
        size={pxToRem('100px')}
        color={theme.pallet.LIGHT_BLUE}
      />
      <div className="error__message">
        <Text.Heading level="1">Oops!</Text.Heading>
        <span className="error__message__description">
          We can&apos;t seem to find the page you&apos;re looking for
        </span>
      </div>
      <div className="error__links">
        <div className="error__links__message">
          Here are some helpful links instead:
        </div>
        <SubNavigation links={errorLinks} vertical colorType="dark" />
      </div>
    </Styled.Error>
  );
};

export default Error;
