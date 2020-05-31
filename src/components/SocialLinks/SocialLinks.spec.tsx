import React from 'react';
import renderer from 'react-test-renderer';
import SocialLinks from './SocialLinks.component';

test('Social Links Test', () => {
  const component = renderer.create(<SocialLinks />);

  const test = component.toJSON();
  expect(test).toMatchSnapshot();
});
