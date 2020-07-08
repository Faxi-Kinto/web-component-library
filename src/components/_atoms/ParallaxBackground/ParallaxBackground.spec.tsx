import React from 'react';
import ParallaxBackground from '.';
import renderer from 'react-test-renderer';
import { ParallaxBackgroundProps } from './ParallaxBackground.component';

test('ParallaxBackground renders correctly', () => {
  const props: ParallaxBackgroundProps = {
    url: '',
  };
  const tree = renderer.create(<ParallaxBackground {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
