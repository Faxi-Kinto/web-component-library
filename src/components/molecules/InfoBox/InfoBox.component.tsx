import React from 'react';
import * as Styled from './InfoBox.styles';

/**
 * @name InfoBox
 *
 * [Insert Component Description]
 *
 * @returns {JSX}
 */

export type InfoBoxProps = {
  /** @param {ReactNode} icon
   *  @description Prop that represents icon,
   *  you can send either JSX object or React Component
   */
  children: React.ReactNode;
};

const InfoBox: React.FC<InfoBoxProps> = (props: InfoBoxProps): JSX.Element => {
  const { children } = props;

  return <Styled.Container>{children}</Styled.Container>;
};

export default InfoBox;
