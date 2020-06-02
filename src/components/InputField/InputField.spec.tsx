import React from 'react';
import renderer from 'react-test-renderer';

import InputField from './InputField.component';

test('InputField renders correctly', () => {
  const component = renderer.create(<InputField />);

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
