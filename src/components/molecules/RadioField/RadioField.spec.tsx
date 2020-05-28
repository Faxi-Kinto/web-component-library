import React from 'react';
import renderer from 'react-test-renderer';

import RadioField from './RadioField.component';

test('RadioField renders correctly', () => {
  const component = renderer.create(<RadioField name="test" value="test" />);

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
