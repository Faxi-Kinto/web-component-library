import React from 'react';
import renderer from 'react-test-renderer';
import Error from './Error.component';

test('Error renders correctly', () => {
  const component = renderer.create(<Error />);

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
