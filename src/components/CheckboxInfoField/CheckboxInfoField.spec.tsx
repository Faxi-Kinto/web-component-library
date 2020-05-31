import React from 'react';
import renderer from 'react-test-renderer';

import CheckboxInfoField from './CheckboxInfoField.component';

test('CheckboxField renders correctly', () => {
  const component = renderer.create(
    <CheckboxInfoField label="Hello" description="Test" />
  );

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
