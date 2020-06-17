import React from 'react';
import renderer from 'react-test-renderer';
import Image from './Image.component';

test('Image renders correctly', () => {
  const component = renderer.create(
    <Image src="/assets/images/albert.jpg" alt="avatar" />
  );

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
