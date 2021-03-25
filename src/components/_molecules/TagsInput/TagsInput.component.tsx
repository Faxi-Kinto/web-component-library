import React, { useCallback, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import uniqid from 'uniqid';

import * as Styled from './TagsInput.styles';

type ValidateFn = (value: string) => React.ReactNode | undefined;

type Tag = {
  value: string;
  error: React.ReactNode;
};

type TagsState = Record<string, Tag>;

const removeInvalidTags = (tags: string | string[] = []) => {
  const refinedTags = typeof tags === 'string' ? tags.split(',') : tags;
  return Array.from(new Set(refinedTags.filter(Boolean)));
};

const validateTag = (tag: string, validate: ValidateFn | ValidateFn[]) => {
  if (Array.isArray(validate)) {
    for (const validation of validate) {
      const result = validation(tag);
      if (result) return result;
    }
  } else {
    return validate(tag);
  }
};

const createTagsFromStrings = (
  strings: string[],
  validate?: ValidateFn | ValidateFn[]
): TagsState =>
  removeInvalidTags(strings).reduce((acc, tag) => {
    const key = uniqid();

    acc[key] = {
      value: tag,
      error: validate ? validateTag(tag, validate) : '',
    };
    return acc;
  }, {} as TagsState);

type TagsInputProps = {
  autoFocus?: boolean;
  className?: string;
  id?: string;
  initialTags?: string[];
  label?: string;
  placeholder: string;
  spaceSeparates?: boolean;
  validateTag?: ValidateFn | ValidateFn[];
  onChange?: (tags: string[]) => void;
};

const TagsInput: React.FC<TagsInputProps> = (
  props: TagsInputProps
): JSX.Element => {
  const {
    autoFocus,
    className,
    id,
    initialTags,
    label,
    placeholder = 'Add email',
    spaceSeparates = true,
    validateTag,
    onChange,
  } = props;

  const [tags, setTags] = useState<TagsState>(
    initialTags ? createTagsFromStrings(initialTags, validateTag) : {}
  );

  const [inputValue, setInputValue] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const addTag = useCallback(
    (value: string) => {
      setTags(old => {
        if (
          Object.values(old)
            .map(({ value: v }) => v)
            .includes(value)
        )
          return old;
        else {
          const newTags = {
            ...old,
            ...createTagsFromStrings([value], validateTag),
          };
          requestAnimationFrame(() =>
            onChange?.(Object.values(newTags).map(tag => tag.value))
          );

          return newTags;
        }
      });
      setInputValue('');
    },
    [validateTag, onChange]
  );

  const removeTag = useCallback(
    (key?: string) => {
      setTags(old => {
        const newTags = { ...old };
        if (key) {
          delete newTags[key];
          onChange?.(Object.values(newTags).map(tag => tag.value));
          return newTags;
        }
        const tagKeys = Object.keys(old);
        delete newTags[tagKeys[tagKeys.length - 1]];
        requestAnimationFrame(() =>
          onChange?.(Object.values(newTags).map(tag => tag.value))
        );
        return newTags;
      });
    },
    [onChange]
  );

  const onKeyDown = useCallback(
    (ev: React.KeyboardEvent) => {
      const { key } = ev;
      if (key === 'Enter' || (spaceSeparates && key === ' ')) {
        ev.preventDefault();
        const trimmedVal = inputValue.trim();
        if (trimmedVal) addTag(trimmedVal);
      }

      if (key === 'Backspace') {
        if (!inputValue) {
          removeTag();
        } else if (!inputValue.trim()) {
          setInputValue('');
        }
      }
    },
    [addTag, removeTag, inputValue, spaceSeparates]
  );

  const onPaste = useCallback(
    (e: React.ClipboardEvent) => {
      const pastedValue = e.clipboardData.getData('text');

      if (pastedValue.includes(' ')) {
        const splitPastedValue = pastedValue
          .split(/[\s,]+/)
          .filter(e => e.trim().length > 0);
        splitPastedValue.forEach(item => {
          addTag(item);
        });
        e.preventDefault();
      }
    },
    [addTag]
  );

  const tagErrors = useMemo(
    () =>
      Object.entries(tags).reduce((errors, [key, { error }]) => {
        if (error) {
          errors[key] = error;
        }
        return errors;
      }, {} as Record<string, React.ReactNode>),
    [tags]
  );

  const tagErrorsArray = useMemo(() => Object.values(tagErrors), [tagErrors]);

  return (
    <Styled.Container className={className}>
      {label && (
        <label
          className={classNames({
            'tags-label--error': !!tagErrorsArray.length,
          })}
          onClick={() => inputRef.current?.focus()}
        >
          {label}
        </label>
      )}
      {!!tagErrorsArray.length && (
        <div className="tags-error">{tagErrorsArray[0]}</div>
      )}
      <div className="tags-input" onClick={() => inputRef.current?.focus()}>
        <div className="tags-input__wrapper">
          {Object.entries(tags).map(([key, { value }]) => (
            <div
              className={classNames([
                'tags-input__entry',
                { 'tags-input__entry--error': !!tagErrors[key] },
              ])}
              key={key}
            >
              <span>{value}</span>
              <button type="button" onClick={() => removeTag(key)}>
                <i className="close" />
              </button>
            </div>
          ))}
          <input
            autoFocus={autoFocus}
            id={id}
            ref={inputRef}
            value={inputValue}
            onChange={ev =>
              setInputValue(
                ev.target.value.includes(' ') ? ' ' : ev.target.value
              )
            }
            onBlur={ev => addTag(ev.target.value.trim())}
            onKeyDown={onKeyDown}
            onPaste={onPaste}
          />

          {!Object.keys(tags).length && !inputValue && (
            <span className="tags-input__placeholder">{placeholder}</span>
          )}
        </div>
      </div>
    </Styled.Container>
  );
};

export default TagsInput;
