import React from 'react';
import * as Styled from './Spinner.styles';

/**
 * @name Spinner
 *
 * A circular loading spinner.
 *
 * @returns {JSX}
 */

export type SpinnerProps = {
  color: string;
  backgroundColor?: string;
  className?: string;
};

const Spinner: React.FC<SpinnerProps> = (props: SpinnerProps): JSX.Element => {
  const { color, backgroundColor = 'transparent', className } = props;
  return (
    <Styled.Spinner
      color={color}
      backgroundColor={backgroundColor}
      className={className}
    />
  );
};

Spinner.defaultProps = {
  backgroundColor: 'transparent',
};

export default Spinner;
