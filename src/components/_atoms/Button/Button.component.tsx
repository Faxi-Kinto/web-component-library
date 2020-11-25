import React from 'react';
import * as Styled from './Button.styles';
import classNames from 'classnames';

/**
 * @name Button
 *
 * @returns {JSX}
 */

export interface ButtonProps {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  secondary?: boolean;
  type?: 'submit' | 'reset' | 'button';
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps): JSX.Element => {
  const {
    children,
    secondary,
    onClick,
    type,
    className,
    disabled = false,
  } = props;
  return (
    <Styled.Button
      disabled={disabled}
      className={classNames([
        'button',
        { 'button--secondary': secondary },
        { 'button--disabled': disabled },
        className,
      ])}
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
