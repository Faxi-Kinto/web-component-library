import React from 'react';
import * as Styled from './Label.styles';

/**
 * @name Label
 *
 * [Insert Component Description]
 *
 * @returns {JSX}
 */

export interface LabelProps {
  children?: React.ReactNode;
  htmlFor?: string;
  className?: string;
}

const Label: React.FC<LabelProps> = (props: LabelProps): JSX.Element => {
  const { children, htmlFor, className } = props;
  return (
    <Styled.Label htmlFor={htmlFor} className={className}>
      {children}
    </Styled.Label>
  );
};

export default Label;
