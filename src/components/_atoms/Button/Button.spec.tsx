import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button.component';

test('Button renders correctly', () => {
  const component = renderer.create(<Button>Button</Button>);

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
