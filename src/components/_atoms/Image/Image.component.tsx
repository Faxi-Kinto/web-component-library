import React from 'react';
import * as Styled from './Image.styles';

/**
 * @name Image
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
  alt: string;
  className?: string;
  height?: string;
  objectFit?: ImageObjectFit;
  src?: string;
  width?: string;
  onClick?: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
};

const Image: React.FC<ImageProps> = (props: ImageProps): JSX.Element => {
  const {
    alt,
    className,
    height,
    objectFit,
    src,
    width,
    onClick,
    onError,
  } = props;

  return (
    <Styled.Image
      alt={alt}
      className={className}
      height={height || defaultHeight}
      width={width || defaultWidth}
      src={src}
      style={{ objectFit }}
      onClick={onClick}
      onError={onError}
    />
  );
};

export default Image;
