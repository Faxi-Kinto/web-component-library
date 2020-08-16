import React, { useState } from 'react';
import * as Styled from './CookiePolicy.styles';
import Text from '../../_atoms/Text';
import Button from '../../_atoms/Button';
import classNames from 'classnames';

export type CookieStatus = {
  acceptedCookies: boolean;
};

export type CookiePolicyProps = {
  cookieClassName?: string;
  title?: string;
  text?: JSX.Element;
  backgroundColor?: string;
  textColor?: string;
  buttonBackground?: string;
  buttonColor?: string;
  textClassName?: string;
  cookieTitleClassName?: string;
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
    textClassName,
    userAction,
    cookieClassName,
    cookieTitleClassName,
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
        <div className={classNames(['cookie-policy', cookieClassName])}>
          <Text.Heading
            level="3"
            className={classNames([
              'cookie-policy__title',
              cookieTitleClassName,
            ])}
          >
            {title}
          </Text.Heading>
          <Text.Body className="cookie-policy__text">
            {text &&
              React.cloneElement(text, {
                className: classNames([
                  'cookie-policy__text__body',
                  textClassName,
                ]),
              })}
          </Text.Body>
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
