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
  size: number;
  backgroundColor?: string;
  className?: string;
};

const Spinner: React.FC<SpinnerProps> = (props: SpinnerProps): JSX.Element => {
  const { color, size, backgroundColor = 'transparent', className } = props;
  return (
    <Styled.Spinner
      color={color}
      size={size}
      backgroundColor={backgroundColor && backgroundColor}
      className={`spinner${className ? ' ' + className : ''}`}
    >
      <div className="spinner-part top">
        <div className="spinner-rotator" />
      </div>
      <div className="spinner-part bottom">
        <div className="spinner-rotator" />
      </div>
    </Styled.Spinner>
  );
};

export default Spinner;
