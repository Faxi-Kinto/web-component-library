import React from 'react';
import * as Styled from './Image.styles';

/**
 * @name Image
 *
 * [Insert Component Description]
 *
 * @returns {JSX}
 */

const defaultWidth = 'auto';
const defaultHeight = 'auto';

type ImageObjectFit =
  | 'contain'
  | 'cover'
  | 'fill'
  | 'inherit'
  | 'initial'
  | 'none'
  | 'scale-down'
  | 'unset';

export type ImageProps = {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  objectFit?: ImageObjectFit;
  className?: string;
  onClick?: Function;
};

const Image: React.FC<ImageProps> = (props: ImageProps): JSX.Element => {
  const { src, alt, width, height, objectFit, className, onClick } = props;

  return (
    <Styled.Image
      src={src}
      alt={alt}
      width={width || defaultWidth}
      height={height || defaultHeight}
      className={className}
      style={{ objectFit }}
      onClick={onClick && onClick()}
    />
  );
};

export default Image;
