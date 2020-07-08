import React from 'react';
import renderer from 'react-test-renderer';
import Checkbox from '.';

test('Checkbox renders correctly', () => {
  const component = renderer.create(
    <Checkbox
      icon={
        <img style={{ width: '70%' }} src="assets/icons/checkmark.svg" alt="" />
      }
    />
  );

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
