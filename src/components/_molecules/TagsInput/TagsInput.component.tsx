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
  placeholder: string;
  className?: string;
  label?: string;
  initialTags?: string[];
  spaceSeparates?: boolean;
  validateTag?: ValidateFn | ValidateFn[];
  onChange?: (tags: string[]) => void;
};

const TagsInput: React.FC<TagsInputProps> = (
  props: TagsInputProps
): JSX.Element => {
  const {
    initialTags,
    className,
    label,
    spaceSeparates = true,
    placeholder = 'Add email',
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

  const tagError = useMemo(
    () => Object.entries(tags).find(entry => Boolean(entry[1].error)),
    [tags]
  );

  return (
    <Styled.Container className={className}>
      {label && (
        <label
          className={classNames({ 'tags-label--error': !!tagError })}
          onClick={() => inputRef.current?.focus()}
        >
          {label}
        </label>
      )}
      {tagError && <div className="tags-error">{tagError?.[1].error}</div>}
      <div className="tags-input" onClick={() => inputRef.current?.focus()}>
        <div className="tags-input__wrapper">
          {Object.entries(tags).map(([key, { value }]) => (
            <div
              className={classNames([
                'tags-input__entry',
                { 'tags-input__entry--error': tagError?.[0] === key },
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
            ref={inputRef}
            value={inputValue}
            onChange={ev => setInputValue(ev.target.value)}
            onBlur={ev => addTag(ev.target.value.trim())}
            onKeyDown={onKeyDown}
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
