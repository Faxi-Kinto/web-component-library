import React from 'react';
import renderer from 'react-test-renderer';
import Icon from './Icon.component';

test('Icon renders correctly', () => {
  const component = renderer.create(<Icon name="users" />);

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
