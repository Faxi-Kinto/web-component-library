import React from 'react';
import renderer from 'react-test-renderer';

import FormField from './FormField.component';
import InputField from '../InputField';

test('FormField renders correctly', () => {
  const component = renderer.create(
    <FormField name="test" component={InputField} />
  );

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
