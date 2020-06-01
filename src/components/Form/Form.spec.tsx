import React from 'react';
import renderer from 'react-test-renderer';

import Form from '.';

test('Form renders correctly', () => {
  const component = renderer.create(<Form onSubmit={() => {}}></Form>);

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
