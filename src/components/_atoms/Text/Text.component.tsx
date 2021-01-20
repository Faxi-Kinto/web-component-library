import React, { ReactNode } from 'react';
import * as Styled from './Text.styles';
import { defaultFontSize } from '@faxi/web-css-utilities/constants';

type TextProps = {
  children: React.ReactNode;
  className?: string;
  fontSize?: string;
  color?: string;
};

export const Body = (props: TextProps): JSX.Element => {
  const {
    children,
    className,
    color = 'black',
    fontSize = defaultFontSize,
  } = props;

  return (
    <Styled.Body className={className} color={color} fontSize={fontSize}>
      {children}
    </Styled.Body>
  );
};

interface HeadingTextProps extends TextProps {
  children: ReactNode;
  color?: string;
  level: '1' | '2' | '3' | '4' | '5' | '6';
}

export const Heading = (props: HeadingTextProps): JSX.Element => {
  const { children, className, color = 'black', level } = props;

  switch (level) {
    case '1':
      return (
        <Styled.Heading1 className={className} color={color}>
          {children}
        </Styled.Heading1>
      );
    case '2':
      return (
        <Styled.Heading2 className={className} color={color}>
          {children}
        </Styled.Heading2>
      );
    case '3':
      return (
        <Styled.Heading3 className={className} color={color}>
          {children}
        </Styled.Heading3>
      );
    case '4':
      return (
        <Styled.Heading4 className={className} color={color}>
          {children}
        </Styled.Heading4>
      );
    case '5':
      return (
        <Styled.Heading5 className={className} color={color}>
          {children}
        </Styled.Heading5>
      );
    case '6':
      return (
        <Styled.Heading6 className={className} color={color}>
          {children}
        </Styled.Heading6>
      );
    default:
      return (
        <Styled.Heading1 className={className} color={color}>
          {children}
        </Styled.Heading1>
      );
  }
};

interface ParagraphTextProps extends TextProps {
  children: ReactNode;
  color?: string;
  level: '1' | '2';
}

export const Paragraph = (props: ParagraphTextProps): JSX.Element => {
  const { children, className, color = 'black', level } = props;

  switch (level) {
    case '1':
      return (
        <Styled.Paragraph1 color={color} className={className}>
          {children}
        </Styled.Paragraph1>
      );
    case '2':
      return (
        <Styled.Paragraph2 color={color} className={className}>
          {children}
        </Styled.Paragraph2>
      );
    default:
      return (
        <Styled.Paragraph1 color={color} className={className}>
          {children}
        </Styled.Paragraph1>
      );
  }
};

export const Link = (
  props: React.HTMLProps<HTMLAnchorElement>
): JSX.Element => {
  const {
    children,
    className,
    color,
    download,
    href,
    media,
    rel,
    target,
    type,
  } = props;

  return (
    <Styled.Link
      className={className}
      color={color}
      download={download}
      href={href}
      media={media}
      rel={rel}
      target={target}
      type={type}
    >
      {children}
    </Styled.Link>
  );
};

export const Emphasized = (props: TextProps): JSX.Element => {
  const { children, className, color = 'black' } = props;
  return (
    <Styled.Emphasized color={color} className={className}>
      {children}
    </Styled.Emphasized>
  );
};

export default {
  Body,
  Heading,
  Paragraph,
  Link,
  Emphasized,
};
