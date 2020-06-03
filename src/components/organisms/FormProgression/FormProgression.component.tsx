import React, {
  useRef,
  createRef,
  useCallback,
  useState,
  useEffect,
} from 'react';
import * as Styled from './FormProgression.styles';
import Icon from '../../atoms/Icon';
import { pxToRem } from '../../../styles/basics';
import { useWindowSize } from '../../../hooks/useWindowSize';

/**
 * @name FormProgression
 *
 * Displays progress bar filled to the step passed via props
 *
 * @returns {JSX}
 */

export type Stage = {
  name: string;
};

export type FormProgressionProps = {
  stages: Stage[];
  labelName: string;
  currentStage: number;
  className?: string;
};

const FormProgression = ({
  stages,
  currentStage,
  labelName,
  className,
}: FormProgressionProps): JSX.Element => {
  const circlesRefs = useRef(stages.map(() => createRef<HTMLDivElement>()));
  const progressFillerRef = useRef<HTMLDivElement>(null);
  const [barFillerWidth, setBarFillerWidth] = useState('');

  const calculateWidth = useCallback((): void => {
    if (currentStage >= stages.length) {
      setBarFillerWidth('100%');
      return;
    }
    if (currentStage < 1) {
      setBarFillerWidth('0');
      return;
    }
    const result =
      (circlesRefs.current[currentStage].current?.getBoundingClientRect()
        .x as number) -
      (progressFillerRef.current?.getBoundingClientRect().x as number);
    setBarFillerWidth(pxToRem(`${Math.round(result - 5)}px`));
  }, [currentStage, stages.length]);

  useWindowSize(calculateWidth);

  useEffect(() => {
    calculateWidth();
  });

  return (
    <Styled.Container
      className={`progression${className ? ' ' + className : ''}`}
    >
      <div className="progression__bar">
        <div
          className="progression__bar__filler"
          ref={progressFillerRef}
          style={{ width: barFillerWidth }}
        ></div>
      </div>
      <div className="progression__stages">
        {stages.map((stage, index) => {
          return (
            <div key={index} className="progression__stages__stage">
              <div
                className="progression__stages__stage__circle"
                ref={circlesRefs.current[index]}
              >
                {index + 1 <= currentStage ? (
                  <Icon
                    className="progression__stages__stage__circle__checked"
                    name="check-circle"
                    size="10px"
                    color="white"
                  />
                ) : (
                  <div className="progression__stages__stage__circle__empty" />
                )}
              </div>
              <div className="progression__stages__stage__label">
                <span className="progression__stages__stage__label__text">
                  {labelName}
                </span>
                &nbsp;
                <span className="progression__stages__stage__label__index">
                  {index + 1}
                </span>
              </div>

              <div className="progression__stages__stage__name">
                {stage.name}
              </div>
            </div>
          );
        })}
      </div>
    </Styled.Container>
  );
};

FormProgression.defaultProps = {
  currentStage: 1,
};

export default FormProgression;
