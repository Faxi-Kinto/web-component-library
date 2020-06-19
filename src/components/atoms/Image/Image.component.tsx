import React from 'react';
import * as Styled from './Image.styles';
import { pxToRem } from '@faxi/web-css-utilities';

/**
 * @name Image
 *
 * [Insert Component Description]
 *
 * @returns {JSX}
 */

// TODO: this is same as Logo from CCF...

const defaultWidth = pxToRem('95px');
const defaultHeight = pxToRem('95px');

type ImageObjectFit =
  | 'contain'
  | 'cover'
  | 'fill'
  | 'inherit'
  | 'initial'
  | 'none'
  | 'scale-down'
  | 'unset';

export type AvatarProps = {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  objectFit?: ImageObjectFit;
  className?: string;
};

const Image: React.FC<AvatarProps> = (props: AvatarProps): JSX.Element => {
  const { src, alt, width, height, objectFit, className } = props;

  return (
    <Styled.Image
      src={src}
      alt={alt}
      width={width || defaultWidth}
      height={height || defaultHeight}
      className={className}
      style={{ objectFit }}
    />
  );
};

export default Image;