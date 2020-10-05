import React from 'react';
import renderer from 'react-test-renderer';
import TextArea from './';

test('TextArea renders correctly', () => {
  const component = renderer.create(
    <TextArea value="Test value" onChange={(): null => null} error />
  );

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
