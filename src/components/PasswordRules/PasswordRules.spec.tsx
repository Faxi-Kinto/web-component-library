import React from 'react';
import renderer from 'react-test-renderer';
import PasswordRules from './PasswordRules.component';

test('PasswordRules renders correctly', () => {
  const component = renderer.create(<PasswordRules password="" />);

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
