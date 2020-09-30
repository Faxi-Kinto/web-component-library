import React, { ReactElement } from 'react';
import * as Styled from './Error.styles';
import Text from '../../_atoms/Text';

export type ErrorType = '400' | '404' | '500';

export type ErrorItems = {
  description: string;
  message: string;
  jsx: ReactElement;
};

export type ErrorProps = {
  errorType: ErrorType;
  ErrorTexts?: Record<ErrorType, ErrorItems>;
  icon?: JSX.Element;
  errorMessageTitle?: string;
} & Styled.ErrorStylingProps;

const Error: React.FC<ErrorProps> = (props: ErrorProps): JSX.Element => {
  const {
    errorType = '404',
    icon,
    ErrorTexts,
    errorMessageTitle,
    errorMessageTitleColor,
    errorMessageDescriptionColor,
    errorLinksPhoneColor,
  } = props;

  return (
    <Styled.Error
      className="error"
      errorMessageTitleColor={errorMessageTitleColor}
      errorMessageDescriptionColor={errorMessageDescriptionColor}
      errorLinksPhoneColor={errorLinksPhoneColor}
    >
      {icon &&
        React.cloneElement(icon, {
          className: 'error__logo',
        })}
      <div className="error__message">
        <Text.Heading level="1" className="error__message__title">
          {errorMessageTitle}
        </Text.Heading>
        {ErrorTexts && (
          <span className="error__message__description">
            {ErrorTexts[errorType].description}
          </span>
        )}
      </div>
      {ErrorTexts && (
        <div className="error__links">
          <div className="error__links__message">
            {ErrorTexts[errorType].message}
          </div>
          {ErrorTexts[errorType].jsx}
        </div>
      )}
    </Styled.Error>
  );
};

Error.defaultProps = {
  errorType: '404',
};

export default Error;
