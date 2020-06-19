import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button.component';
import { pxToRem } from '@faxi/web-css-utilities';

test('Button renders correctly', () => {
  const component = renderer.create(
    <Button height={pxToRem('45px')} width={pxToRem('350px')}>
      Button
    </Button>
  );

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
