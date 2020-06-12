import React from 'react';
import renderer from 'react-test-renderer';
import Input from './';

test('Input renders correctly', () => {
  const component = renderer.create(
    <Input value="Test value" onChange={(): null => null} error />
  );

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
