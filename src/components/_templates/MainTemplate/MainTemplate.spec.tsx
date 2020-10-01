import React from 'react';
import renderer from 'react-test-renderer';

import MainTemplate from './MainTemplate.component';

test('MainTemplate renders correctly', () => {
  const component = renderer.create(
    <MainTemplate parallaxUrl="">Insert some JSX here!</MainTemplate>
  );

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
