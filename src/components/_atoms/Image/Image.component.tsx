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
  src?: string;
  alt: string;
  width?: string;
  height?: string;
  objectFit?: ImageObjectFit;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  id?: string;
};

const Image: React.FC<ImageProps> = (props: ImageProps): JSX.Element => {
  const {
    src,
    alt,
    width,
    height,
    objectFit,
    className,
    onClick,
    onError,
    id,
  } = props;

  return (
    <Styled.Image
      id={id}
      src={src}
      alt={alt}
      width={width || defaultWidth}
      height={height || defaultHeight}
      className={className}
      style={{ objectFit }}
      onClick={onClick}
      onError={onError}
    />
  );
};

export default Image;
