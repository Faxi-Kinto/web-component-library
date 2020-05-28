import React from 'react';
import * as Styled from './HeroImage.styles';

/**
 * @name HeroImage
 *
 * Displays an image by returning a div with an image-filled background
 *
 * @returns {JSX}
 */

export type HeroImageProps = {
  url: string;
  className?: string;
};

const HeroImage: React.FC<HeroImageProps> = (
  props: HeroImageProps
): JSX.Element => {
  const { url, className } = props;

  return <Styled.Background url={url} className={className} />;
};

export default HeroImage;
