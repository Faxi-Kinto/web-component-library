import React from 'react';
import renderer from 'react-test-renderer';
import Text from '../../_atoms/Text';
import CookiePolicy from '.';

test('CookiePolicy renders correctly', () => {
  const component = renderer.create(
    <CookiePolicy
      text={
        <Text.Body>
          We use cookies to ensure that we give you the best experience on our
          website.{' '}
          <Text.Link href="#" target="_blank">
            Read our privacy policy
          </Text.Link>{' '}
          and let us know that you agree to cookies.
        </Text.Body>
      }
      acceptButtonContent={<p>Accept</p>}
      declineButtonContent={<p>Reject</p>}
    />
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
