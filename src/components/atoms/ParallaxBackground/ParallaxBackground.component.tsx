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
  url: string;
  className?: string;
};

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = (
  props: ParallaxBackgroundProps
): JSX.Element => {
  const { url, className } = props;

  return <Styled.Background url={url} className={className} />;
};

export default ParallaxBackground;
