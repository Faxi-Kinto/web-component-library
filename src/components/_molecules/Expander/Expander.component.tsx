import React, { ReactNode, useState } from 'react';
import * as Styled from './Expander.styles';
import { Button } from '../../..';

export type ExpanderProps = {
  label?: string;
  text?: React.ReactNode;
  icon: ReactNode;
  headerClassName?: string;
  buttonClassName?: string;
  bodyClassName?: string;
};

const Expander: React.FC<ExpanderProps> = (
  props: ExpanderProps
): JSX.Element => {
  const { label, text, icon, headerClassName, buttonClassName } = props;
  const [isShown, setShowHide] = useState(false);

  const handleExpander = () => {
    setShowHide(!isShown);
  };

  return (
    <Styled.Container className="collapse-card">
      <div
        className={`collapse-card__header${
          headerClassName ? ' ' + headerClassName : ''
        }`}
      >
        <Button
          secondary
          className={`collapse-card__header__button${
            buttonClassName ? ' ' + buttonClassName : ''
          }`}
          onClick={handleExpander}
        >
          <span>{label}</span>
          <div
            className={`collapse-card__header__icon${
              isShown ? ' collapse-card__header__icon--open' : ''
            }`}
          >
            {icon}
          </div>
        </Button>
      </div>
      <div
        className={`collapse-card__box${
          isShown
            ? ' collapse-card__box--open'
            : ' collapse__card-header__body--close'
        }`}
      >
        <div className="collapse-card__box__body">{text}</div>
      </div>
    </Styled.Container>
  );
};

export default Expander;
