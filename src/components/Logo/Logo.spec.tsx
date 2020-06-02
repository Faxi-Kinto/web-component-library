import React from 'react';
import renderer from 'react-test-renderer';
import Logo from './Logo.component';

test('Logo check', () => {
  const component = renderer.create(
    <Logo src="images/logo.svg" alt={'Logo'} width="102px" />
  );

  const test = component.toJSON();
  expect(test).toMatchSnapshot();
});
