import React from 'react';
import Icon from '../../atoms/Icon';
import { IconName } from '../../atoms/Icon/Icon.component';
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
  icon?: IconName;
  children: React.ReactNode;
};

const InfoBox: React.FC<InfoBoxProps> = (props: InfoBoxProps): JSX.Element => {
  const { children, icon } = props;

  return (
    <Styled.Container className={icon ? 'info-box--has-icon' : ''}>
      {icon && <Icon name={icon} className="info-box__icon" />}
      {children}
    </Styled.Container>
  );
};

export default InfoBox;
