import React from 'react';
import * as Styled from './Spinner.styles';

/**
 * @name Spinner
 *
 * Displays a circular spinner, accepts props that describe the color of the spinner and the background the spinner will be on (which is transparent by default)
 *
 * @returns {JSX}
 */

export type SpinnerProps = {
  color: string;
  backgroundColor?: string;
};

const Spinner: React.FC<SpinnerProps> = (props: SpinnerProps): JSX.Element => {
  const { color, backgroundColor = 'transparent' } = props;
  return <Styled.Spinner color={color} backgroundColor={backgroundColor} />;
};

Spinner.defaultProps = {
  backgroundColor: 'transparent',
};

export default Spinner;