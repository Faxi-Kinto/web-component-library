import React from 'react';
import renderer from 'react-test-renderer';

import CheckboxField from './CheckboxField.component';

test('CheckboxField renders correctly', () => {
  const component = renderer.create(<CheckboxField />);

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
