import React from 'react';
import * as Styled from './ParallaxBackground.styles';

/**
 * @name ParallaxBackground
 *
 * Displays an image by returning a div with an image-filled background
 *
 * @returns {JSX}
 */

export type ParallaxBackgroundProps = {
  className?: string;
  url: string;
};

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = (
  props: ParallaxBackgroundProps
): JSX.Element => {
  const { className, url } = props;

  return <Styled.Background className={className} url={url} />;
};

export default ParallaxBackground;
