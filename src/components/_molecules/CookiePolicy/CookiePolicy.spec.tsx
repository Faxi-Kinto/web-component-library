import React from 'react';
import renderer from 'react-test-renderer';
import CookiePolicy from '.';

test('CookiePolicy renders correctly', () => {
  const component = renderer.create(
    <CookiePolicy
      title={'Cookie Policy'}
      text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.`}
      buttonContentF={<p>Accept</p>}
      buttonContentS={<p>Reject</p>}
    />
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
