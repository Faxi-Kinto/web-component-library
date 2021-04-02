import React from 'react';
import renderer from 'react-test-renderer';
import Text from '../../_atoms/Text';
import NavigationLinks, {
  NavLink,
} from '../../_molecules/NavigationLinks/NavigationLinks.component';
import Error, { ErrorItems, ErrorType } from './Error.component';

test('Error renders correctly', () => {
  const errorLinks: NavLink[] = [
    { name: 'Home', route: '' },
    { name: 'About', route: '' },
    { name: 'Enterprise', route: '' },
    { name: 'FAQ', route: '' },
  ];

  const ErrorTexts: Record<ErrorType, ErrorItems> = {
    '400': {
      description: 'Network error',
      message: 'Network error',
      jsx: <Text.Link href="tel:+111111111">(+1) 11111111</Text.Link>,
    },
    '404': {
      description: 'Not found',
      message: 'Not found',
      jsx: <NavigationLinks links={errorLinks} vertical />,
    },
    '500': {
      description: 'Server error',
      message: 'Server error',
      jsx: (
        <Text.Link className="error__links__phone" href="tel:+4402073871133">
          (+44) 0207 387 1133
        </Text.Link>
      ),
    },
  };

  const component = renderer.create(
    <Error
      errorType="404"
      ErrorTexts={ErrorTexts}
      errorMessageTitle="An error occured"
    />
  );

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
