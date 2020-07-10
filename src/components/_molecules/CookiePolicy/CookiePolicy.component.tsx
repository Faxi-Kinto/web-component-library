import React, { useState } from 'react';
import * as Styled from './CookiePolicy.styles';
import Text from '../../_atoms/Text';
import Button from '../../_atoms/Button';

export type CookieStatus = {
  acceptedCookies: boolean;
};

export type CookiePolicyProps = {
  title?: string;
  text?: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
  buttonBackground?: string;
  buttonColor?: string;
  acceptedCookies?: boolean;
  acceptButtonContent?: React.ReactNode;
  declineButtonContent?: React.ReactNode;
  userAction?: (cookieStatus: CookieStatus) => {};
};

const CookiePolicy: React.FC<CookiePolicyProps> = (
  props: CookiePolicyProps
): JSX.Element => {
  const {
    title,
    text,
    acceptButtonContent,
    declineButtonContent,
    backgroundColor = '#00708d',
    textColor = '#fff',
    buttonBackground = '#fff',
    buttonColor = '#00708d',
    userAction,
  } = props;

  const [isShowing, setIsShowing] = useState(true);

  const deleteCookies = () => {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cook = cookies[i].split('=');
      document.cookie = cook[0] + '=;expires=Thu, 21 Sep 1979 00:00:01 UTC;';
    }
  };

  const declineCookies = () => {
    userAction && userAction({ acceptedCookies: false });
    if (isShowing) {
      setIsShowing(!isShowing);
      localStorage.setItem('showBanner', 'declined');
      deleteCookies();
    }
  };

  const acceptCookies = () => {
    userAction && userAction({ acceptedCookies: true });
    if (isShowing) {
      setIsShowing(!isShowing);
      localStorage.setItem('showBanner', 'accepted');
    }
  };

  return (
    <Styled.Container
      backgroundColor={backgroundColor}
      textColor={textColor}
      buttonBackground={buttonBackground}
      buttonColor={buttonColor}
    >
      {isShowing ? (
        <div className="cookie-policy">
          <Text.Heading level="3" className="cookie-policy__title">
            {title}
          </Text.Heading>
          <Text.Body className="cookie-policy__text">{text}</Text.Body>
          <Button
            className="cookie-policy__accept-button"
            onClick={acceptCookies}
          >
            {acceptButtonContent}
          </Button>
          <Button
            className="cookie-policy__decline-button"
            onClick={declineCookies}
          >
            {declineButtonContent}
          </Button>
        </div>
      ) : null}
    </Styled.Container>
  );
};

export default CookiePolicy;
