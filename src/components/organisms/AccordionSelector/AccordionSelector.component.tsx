import React, { useState, createRef, useMemo } from 'react';
import * as Styled from './AccordionSelector.styles';
import RadioField from 'components/molecules/RadioField';
import Text from 'components/atoms/Text';
import { FieldProps } from 'components/molecules/FormField/FieldProps';

/**
 * @name AccordionSelector
 *
 * [Insert omponent description]
 *
 * @returns {JSX}
 */

export type AccordionSelectorProps = FieldProps & {
  options: AccordionOption[];
  name: string;
  value?: string;
  defaultSelected?: string;
  className?: string;
};

export type AccordionOption = {
  label?: string;
  child?: React.ReactNode;
  text?: string;
};

const AccordionSelector: React.FC<AccordionSelectorProps> = (
  props: AccordionSelectorProps
): JSX.Element => {
  const { options, name, value, onChange, className, defaultSelected } = props;

  const [currentSelected, setCurrentSelected] = useState(defaultSelected);

  const current = useMemo(() => value || currentSelected, [
    currentSelected,
    value,
  ]);

  const refs: React.RefObject<HTMLInputElement>[] = useMemo(
    () => Array.from({ length: options.length }).map(() => createRef()),
    [options.length]
  );
  return (
    <Styled.Container className={className}>
      {options &&
        options.map((option, index) => (
          <div
            key={index}
            className={`option${
              current !== `${index}`
                ? ' option--not-selected'
                : ' option--selected'
            }`}
            onClick={() => {
              refs[index].current?.click();
            }}
          >
            <RadioField
              inputRef={refs[index]}
              value={`${index}`}
              name={name}
              size="md"
              onChange={event => {
                setCurrentSelected(`${index}`);
                onChange && onChange(event.target.value);
              }}
              checked={current === `${index}`}
              label={option.label}
              className="option__radio-button"
            />
            <Text.Body className="option__description">{option.text}</Text.Body>
            {current === `${index}` && (
              <div className="option__child-container">{option.child}</div>
            )}
          </div>
        ))}
    </Styled.Container>
  );
};

AccordionSelector.defaultProps = {
  defaultSelected: '0',
} as Partial<AccordionSelectorProps>;

export default AccordionSelector;
