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
    fontSize = defaultFontSize,
    color = 'black',
  } = props;

  return (
    <Styled.Body className={className} fontSize={fontSize} color={color}>
      {children}
    </Styled.Body>
  );
};

interface HeadingTextProps extends TextProps {
  level: '1' | '2' | '3' | '4' | '5' | '6';
  children: ReactNode;
  color?: string;
}

export const Heading = (props: HeadingTextProps): JSX.Element => {
  const { children, level, className, color = 'black' } = props;

  switch (level) {
    case '1':
      return (
        <Styled.Heading1 color={color} className={className}>
          {children}
        </Styled.Heading1>
      );
    case '2':
      return (
        <Styled.Heading2 color={color} className={className}>
          {children}
        </Styled.Heading2>
      );
    case '3':
      return (
        <Styled.Heading3 color={color} className={className}>
          {children}
        </Styled.Heading3>
      );
    case '4':
      return (
        <Styled.Heading4 color={color} className={className}>
          {children}
        </Styled.Heading4>
      );
    case '5':
      return (
        <Styled.Heading5 color={color} className={className}>
          {children}
        </Styled.Heading5>
      );
    case '6':
      return (
        <Styled.Heading6 color={color} className={className}>
          {children}
        </Styled.Heading6>
      );
    default:
      return (
        <Styled.Heading1 color={color} className={className}>
          {children}
        </Styled.Heading1>
      );
  }
};

interface ParagraphTextProps extends TextProps {
  level: '1' | '2';
  children: ReactNode;
  color?: string;
}

export const Paragraph = (props: ParagraphTextProps): JSX.Element => {
  const { children, level, color = 'black' } = props;

  switch (level) {
    case '1':
      return <Styled.Paragraph1 color={color}>{children}</Styled.Paragraph1>;
    case '2':
      return <Styled.Paragraph2 color={color}>{children}</Styled.Paragraph2>;
    default:
      return <Styled.Paragraph1 color={color}>{children}</Styled.Paragraph1>;
  }
};

export const Link = (
  props: React.HTMLProps<HTMLAnchorElement>
): JSX.Element => {
  const { children, href, target, download, media, rel, type, color } = props;

  return (
    <Styled.Link
      href={href}
      target={target}
      download={download}
      media={media}
      rel={rel}
      type={type}
      color={color}
    >
      {children}
    </Styled.Link>
  );
};

export const Emphasized = (props: TextProps): JSX.Element => {
  const { children, color = 'black' } = props;
  return <Styled.Emphasized color={color}>{children}</Styled.Emphasized>;
};

export default {
  Body,
  Heading,
  Paragraph,
  Link,
  Emphasized,
};
