import React, { ReactElement } from 'react';
import * as Styled from './Error.styles';
import Text from '../../atoms/Text';
import SubNavigation from '../../molecules/SubNavigation';
import Icon from '../../atoms/Icon';
import { NavLink } from '../../molecules/SubNavigation';
import { theme } from '../../../config';
import { pxToRem } from '../../../styles/basics';

const errorLinks: NavLink[] = [
  { name: 'Home', route: '' },
  { name: 'About', route: '' },
  { name: 'Enterprise', route: '' },
  { name: 'FAQ', route: '' },
];

export type ErrorType = '400' | '404' | '500';

type ErrorItems = {
  description: string;
  message: string;
  jsx: ReactElement;
};

export type ErrorProps = {
  errorType: ErrorType;
};

const ErrorTexts: Record<ErrorType, ErrorItems> = {
  '400': {
    description: `It seems like there's a network error.`,
    message: 'Please try again later or call our support line:',
    jsx: <Text.Link href={'tel:123-456'}>+40 123 456 789</Text.Link>,
  },
  '404': {
    description: `We can't seem to find the page you're looking for.`,
    message: 'Here are some helpful links instead',
    jsx: <SubNavigation links={errorLinks} vertical colorType="dark" />,
  },
  '500': {
    description: `It seems like the server is down.`,
    message: 'Please try again later or call our support line:',
    jsx: <Text.Link href={'tel:123-456'}>+40 123 456 789</Text.Link>,
  },
};

const Error: React.FC<ErrorProps> = (props: ErrorProps): JSX.Element => {
  const { errorType } = props;

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
          {ErrorTexts[errorType].description}
        </span>
      </div>
      <div className="error__links">
        <div className="error__links__message">
          {ErrorTexts[errorType].message}
        </div>
        {ErrorTexts[errorType].jsx}
      </div>
    </Styled.Error>
  );
};

export default Error;
