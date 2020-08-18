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
  textBodyClassName?: string;
  textWrapperClassName?: string;
  cookieTitleClassName?: string;
  acceptedCookies?: boolean;
  acceptButtonContent?: React.ReactNode;
  acceptButtonClassName?: string;
  declineButtonClassName?: string;
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
    textBodyClassName,
    userAction,
    cookieClassName,
    cookieTitleClassName,
    textWrapperClassName,
    acceptButtonClassName,
    declineButtonClassName,
  } = props;

  const [isShowing, setIsShowing] = useState(true);

  const declineCookies = () => {
    userAction && userAction({ acceptedCookies: false });
    if (isShowing) {
      setIsShowing(!isShowing);
    }
  };

  const acceptCookies = () => {
    userAction && userAction({ acceptedCookies: true });
    if (isShowing) {
      setIsShowing(!isShowing);
    }
  };

  return (
    <Styled.Container
      backgroundColor={backgroundColor}
      textColor={textColor}
      buttonBackground={buttonBackground}
      buttonColor={buttonColor}
      className={classNames(['cookie-policy', cookieClassName])}
    >
      {isShowing ? (
        <div className="cookie-policy__wrapper">
          <Text.Heading
            level="3"
            className={classNames([
              'cookie-policy__wrapper__title',
              cookieTitleClassName,
            ])}
          >
            {title}
          </Text.Heading>
          <Text.Body
            className={classNames([
              'cookie-policy__wrapper__text',
              textWrapperClassName,
            ])}
          >
            {text &&
              React.cloneElement(text, {
                className: classNames([
                  'cookie-policy__wrapper__text__body',
                  textBodyClassName,
                ]),
              })}
          </Text.Body>
          <Button
            className={classNames([
              'cookie-policy__wrapper__accept-button',
              acceptButtonClassName,
            ])}
            onClick={acceptCookies}
          >
            {acceptButtonContent}
          </Button>
          <Button
            className={classNames([
              'cookie-policy__wrapper__decline-button',
              declineButtonClassName,
            ])}
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
