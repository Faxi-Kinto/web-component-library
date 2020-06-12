import React from 'react';
import renderer from 'react-test-renderer';
import Label from './';

test('Label renders correctly', () => {
  const component = renderer.create(<Label>Label</Label>);

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
