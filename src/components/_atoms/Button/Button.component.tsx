import React from 'react';
import * as Styled from './Button.styles';
import classNames from 'classnames';

/**
 * @name Button
 *
 * @returns {JSX}
 */

export type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  id?: string;
  secondary?: boolean;
  type?: 'submit' | 'reset' | 'button';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<ButtonProps> = (props: ButtonProps): JSX.Element => {
  const {
    children,
    className,
    disabled = false,
    id,
    secondary,
    type = 'button',
    onClick,
  } = props;

  return (
    <Styled.Button
      className={classNames([
        'button',
        { 'button--secondary': secondary },
        { 'button--disabled': disabled },
        className,
      ])}
      disabled={disabled}
      id={id}
      type={type}
      onClick={onClick}
    >
      {children}
    </Styled.Button>
  );
};

Button.defaultProps = {
  type: 'button',
};
export default Button;
