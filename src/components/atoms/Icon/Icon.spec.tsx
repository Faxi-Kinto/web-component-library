import React from 'react';
import renderer from 'react-test-renderer';
import Icon, { IconSet } from './Icon.component';

test('Icon renders correctly', () => {
  const component = renderer.create(<Icon name="question-circle" />);

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('All Icons render correctly', () => {
  const component = renderer.create(<IconSet size="1rem" />);

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
