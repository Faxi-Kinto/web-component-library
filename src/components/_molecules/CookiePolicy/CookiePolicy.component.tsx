import React, { useState } from 'react';
import * as Styled from './CookiePolicy.styles';
import Text from '../../_atoms/Text';
import Button from '../../_atoms/Button';

export type CookiePolicyProps = {
  title?: string;
  text?: React.ReactNode;
  buttonContentF?: React.ReactNode;
  buttonContentS?: React.ReactNode;
  onHandleDecline?: () => void;
  onHandleAccept?: () => void;
};

const CookiePolicy: React.FC<CookiePolicyProps> = (
  props: CookiePolicyProps
): JSX.Element => {
  const {
    title,
    text,
    buttonContentF,
    buttonContentS,
    onHandleDecline,
    onHandleAccept,
  } = props;

  const [isShowing, setIsShowing] = useState(true);

  function deleteCookies() {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cook = cookies[i].split('=');
      document.cookie = cook[0] + '=;expires=Thu, 21 Sep 1979 00:00:01 UTC;';
    }
  }

  const declineCookies = () => {
    if (onHandleDecline) {
      onHandleDecline();
    } else {
      if (isShowing) {
        setIsShowing(!isShowing);
        localStorage.setItem('showBanner', 'declined');
        deleteCookies();
      }
    }
  };

  const acceptCookies = () => {
    if (onHandleAccept) {
      onHandleAccept();
    } else {
      if (isShowing) {
        setIsShowing(!isShowing);
        localStorage.setItem('showBanner', 'accepted');
      }
    }
  };

  return (
    <Styled.Container>
      {isShowing ? (
        <div className="cookie-policy">
          <Text.Heading level="3" className="cookie-policy__title">
            {title}
          </Text.Heading>
          <Text.Body className="cookie-policy__text">{text}</Text.Body>
          <Button className="cookie-policy__btnF" onClick={acceptCookies}>
            {buttonContentF}
          </Button>
          <Button className="cookie-policy__btnS" onClick={declineCookies}>
            {buttonContentS}
          </Button>
        </div>
      ) : null}
    </Styled.Container>
  );
};

export default CookiePolicy;
