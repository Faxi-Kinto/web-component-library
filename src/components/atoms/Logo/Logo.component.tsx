import * as React from 'react';

/**
 * @name Logo
 *
 * [Insert Component Description]
 *
 * @returns {JSX}
 */

export type LogoProps = {
  src: string;
  alt: string;
  width?: string;
  className?: string;
};

const defaultWidth = '102px';

const Logo: React.FC<LogoProps> = (props: LogoProps): JSX.Element => {
  const { src, alt, width, className } = props;

  return (
    <img
      src={src}
      alt={alt}
      width={width || defaultWidth}
      className={className}
    />
  );
};

export default Logo;
