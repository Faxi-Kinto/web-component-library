import React, { ReactNode, useState } from 'react';
import * as Styled from './Expander.styles';
import { Button } from '../../..';

export type ExpanderProps = {
  title?: string;
  body?: React.ReactNode;
  icon: JSX.Element;
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
    headerColor = '#4E606A',
    headerSize = '18px',
    textColor = '#4E606A',
  } = props;

  const [isShown, setShowHide] = useState(false);

  const handleExpander = () => {
    setShowHide(!isShown);
  };

  return (
    <Styled.Container
      className="expander-card"
      headerColor={headerColor}
      headerSize={headerSize}
      textColor={textColor}
    >
      <div
        className={`expander-card__header${
          headerClassName ? ' ' + headerClassName : ''
        }`}
      >
        <Button
          secondary
          className={`expander-card__header__button${
            buttonClassName ? ' ' + buttonClassName : ''
          }`}
          onClick={handleExpander}
        >
          <span>{title}</span>
          <div className="expander-card__header__wrapper">
            {icon &&
              React.cloneElement(icon, {
                className: `expander-card__header__wrapper__icon ${iconClassName}${
                  isShown ? ' expander-card__header__wrapper__icon--open' : ''
                }`,
              })}
          </div>
        </Button>
      </div>
      <div
        className={`expander-card__box${
          isShown
            ? ' expander-card__box--open'
            : ' expander__card-header__body--close'
        }`}
      >
        <div className="expander-card__box__body">{body}</div>
      </div>
    </Styled.Container>
  );
};

export default Expander;
