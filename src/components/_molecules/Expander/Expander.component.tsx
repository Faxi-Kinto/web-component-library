import React, { ReactNode, useState } from 'react';
import * as Styled from './Expander.styles';
import Button from '../../_atoms/Button';
import classNames from 'classnames';

export type ExpanderProps = {
  title: string;
  body: ReactNode;
  icon?: JSX.Element;
  iconClassName?: string;
  headerClassName?: string;
  buttonClassName?: string;
  bodyClassName?: string;
  headerColor?: string;
  headerSize?: string;
  textColor?: string;
};

const Expander: React.FC<ExpanderProps> = (
  props: ExpanderProps
): JSX.Element => {
  const {
    title,
    body,
    icon,
    iconClassName,
    headerClassName,
    buttonClassName,
    headerColor,
    headerSize,
    textColor,
  } = props;

  const [isShown, setIsShown] = useState(false);

  const handleExpander = () => {
    setIsShown(!isShown);
  };

  return (
    <Styled.Container
      className="expander-card"
      headerColor={headerColor}
      headerSize={headerSize}
      textColor={textColor}
    >
      <div className={classNames(['expander-card__header', headerClassName])}>
        <Button
          secondary
          className={classNames([
            'expander-card__header__button',
            buttonClassName,
          ])}
          onClick={handleExpander}
        >
          <span>{title}</span>
          <div className="expander-card__header__wrapper">
            {icon &&
              React.cloneElement(icon, {
                className: classNames([
                  'expander-card__header__wrapper__icon',
                  iconClassName,
                  { 'expander-card__header__wrapper__icon--open': isShown },
                ]),
              })}
          </div>
        </Button>
      </div>
      <div
        className={classNames([
          'expander-card__box',
          { 'expander-card__box--open': isShown },
        ])}
      >
        <div className="expander-card__box__body">{body}</div>
      </div>
    </Styled.Container>
  );
};

export default Expander;
