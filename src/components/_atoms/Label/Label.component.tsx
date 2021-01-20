import React from 'react';
import * as Styled from './Label.styles';

/**
 * @name Label
 *
 * @returns {JSX}
 */

export interface LabelProps {
  children?: React.ReactNode;
  className?: string;
  htmlFor?: string;
}

const Label: React.FC<LabelProps> = (props: LabelProps): JSX.Element => {
  const { children, className, htmlFor } = props;
  return (
    <Styled.Label htmlFor={htmlFor} className={className}>
      {children}
    </Styled.Label>
  );
};

export default Label;
