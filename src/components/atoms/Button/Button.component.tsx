import React from 'react';
import * as Styled from './Button.styles';

/**
 * @name Button
 *
 * [Insert Component Description]
 *
 * @returns {JSX}
 */

export type ButtonType = 'submit' | 'reset' | 'button';

export interface ButtonProps {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  secondary?: boolean;
  type?: ButtonType;
  className?: string;
  width: string;
  height: string;
  background?: string;
  fontColor?: string;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps): JSX.Element => {
  const {
    children,
    secondary,
    onClick,
    type,
    className,
    width,
    height,
    background = 'white',
    fontColor = 'black',
  } = props;
  return (
    <Styled.Button
      width={width}
      height={height}
      background={background}
      fontColor={fontColor}
      className={`button${secondary ? ' button--secondary' : ''}${
        className ? ' ' + className : ''
      }`}
      onClick={onClick}
      type={type}
    >
      {children}
    </Styled.Button>
  );
};

Button.defaultProps = {
  type: 'button',
} as Partial<ButtonProps>;

export default Button;
