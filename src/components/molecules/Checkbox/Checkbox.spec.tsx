import React from 'react';
import renderer from 'react-test-renderer';
import Checkbox from './Checkbox.component';

test('Checkbox renders correctly', () => {
  const component = renderer.create(<Checkbox />);

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
