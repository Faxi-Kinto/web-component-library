import React, { useState } from 'react';
import * as Styled from './CookiePolicy.styles';
import Button from '../../_atoms/Button';
import classNames from 'classnames';

export type CookieStatus = {
  acceptedCookies: boolean;
};

export type CookiePolicyProps = {
  title?: string;
  text?: JSX.Element;
  backgroundColor?: string;
  textColor?: string;
  buttonBackground?: string;
  buttonColor?: string;
  textClassName?: string;
  acceptedCookies?: boolean;
  acceptButtonContent?: React.ReactNode;
  declineButtonContent?: React.ReactNode;
  userAction?: (cookieStatus: CookieStatus) => {};
};

const CookiePolicy: React.FC<CookiePolicyProps> = (
  props: CookiePolicyProps
): JSX.Element => {
  const {
    text,
    acceptButtonContent,
    declineButtonContent,
    backgroundColor = '#00708d',
    textColor = '#fff',
    buttonBackground = 'transparent',
    buttonColor = '#fff',
    textClassName,
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
          <div className="cookie-policy__body">
            {text &&
              React.cloneElement(text, {
                className: classNames([
                  'cookie-policy__body__text',
                  textClassName,
                ]),
              })}
          </div>
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
