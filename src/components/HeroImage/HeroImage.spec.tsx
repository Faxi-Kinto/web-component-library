import React from 'react';
import HeroImage from '.';
import renderer from 'react-test-renderer';
import { HeroImageProps } from './HeroImage.component';

test('HeroImage renders correctly', () => {
  const props: HeroImageProps = {
    url: '',
  };
  const tree = renderer.create(<HeroImage {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
