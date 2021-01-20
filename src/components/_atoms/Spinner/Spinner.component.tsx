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
  backgroundColor?: string;
  className?: string;
  color: string;
  size: number;
};

const Spinner: React.FC<SpinnerProps> = (props: SpinnerProps): JSX.Element => {
  const { backgroundColor = 'transparent', className, color, size } = props;
  return (
    <Styled.Spinner
      backgroundColor={backgroundColor && backgroundColor}
      className={`spinner${className ? ' ' + className : ''}`}
      color={color}
      size={size}
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
