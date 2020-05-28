import React from 'react';
import * as Styled from './Text.styles';
import { defaultFontSize } from 'styles/constants';
import { theme } from 'config';

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
    color = theme.pallet.GRAY_BLUE,
  } = props;

  return (
    <Styled.Body className={className} fontSize={fontSize} color={color}>
      {children}
    </Styled.Body>
  );
};

interface HeadingTextProps extends TextProps {
  level: '1' | '2' | '3' | '4' | '5' | '6';
}

export const Heading = (props: HeadingTextProps): JSX.Element => {
  const { children, level } = props;

  switch (level) {
    case '1':
      return <Styled.Heading1>{children}</Styled.Heading1>;
    case '2':
      return <Styled.Heading2>{children}</Styled.Heading2>;
    case '3':
      return <Styled.Heading3>{children}</Styled.Heading3>;
    case '4':
      return <Styled.Heading4>{children}</Styled.Heading4>;
    case '5':
      return <Styled.Heading5>{children}</Styled.Heading5>;
    case '6':
      return <Styled.Heading6>{children}</Styled.Heading6>;
    default:
      return <Styled.Heading1>{children}</Styled.Heading1>;
  }
};

export const Link = (
  props: React.HTMLProps<HTMLAnchorElement>
): JSX.Element => {
  const { children, href, target, download, media, rel, type } = props;

  return (
    <Styled.Link
      href={href}
      target={target}
      download={download}
      media={media}
      rel={rel}
      type={type}
    >
      {children}
    </Styled.Link>
  );
};

export const Emphasized = (props: TextProps): JSX.Element => {
  const { children, color = theme.pallet.GRAY_BLUE } = props;
  return <Styled.Emphasized color={color}>{children}</Styled.Emphasized>;
};

export default {
  Body,
  Heading,
  Link,
  Emphasized,
};
