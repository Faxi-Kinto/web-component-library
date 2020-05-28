import React from 'react';
import renderer from 'react-test-renderer';
import PasswordInput from './PasswordInput.component';

test('PasswordInput renders correctly', () => {
  const component = renderer.create(<PasswordInput />);

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
