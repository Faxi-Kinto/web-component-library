import styled from 'styled-components';
import { theme } from 'config';
import { pxToRem } from 'styles/fonts';

const sharedTypographyStyles = `
  padding: 0;
  margin: 0;
`;

const sharedHeadingStyles = `
  color: ${theme.pallet.LIGHT_BLUE};
`;

export const Body = styled.span`
  ${sharedTypographyStyles}
  ${(props: { fontSize: string; color: string }) => {
    return `
  font-size: ${pxToRem(props.fontSize)}};
  color: ${props.color};`;
  }};

  font-weight: 300;
  white-space: pre-wrap;
`;

export const Heading1 = styled.h1`
  ${sharedTypographyStyles}
  ${sharedHeadingStyles}

  font-size: ${pxToRem('34px')};
  line-height: ${pxToRem('47px')};
  letter-spacing: 0;
  font-weight: bold;
`;

export const Heading2 = styled.h2`
  ${sharedTypographyStyles}
  ${sharedHeadingStyles}

  font-size: ${pxToRem('30px')};
  line-height: ${pxToRem('42px')};
  font-weight: bold;
`;

export const Heading3 = styled.h3`
  ${sharedTypographyStyles}
  ${sharedHeadingStyles}

  font-size: ${pxToRem('24px')};
  line-height: ${pxToRem('34px')};
  font-weight: 500;
`;

export const Heading4 = styled.h4`
  ${sharedTypographyStyles}
  ${sharedHeadingStyles}

  font-size: ${pxToRem('18px')};
  line-height: ${pxToRem('25px')};
  font-weight: bold;
`;

export const Heading5 = styled.h5`
  ${sharedTypographyStyles}
  ${sharedHeadingStyles}

  font-size: ${pxToRem('14px')};
  line-height: ${pxToRem('20px')};
  font-weight: 400;
`;

export const Heading6 = styled.h6`
  ${sharedTypographyStyles}
  ${sharedHeadingStyles}

  font-size: ${pxToRem('12px')};
  line-height: ${pxToRem('17px')};
  font-weight: 400;
`;

export const Link = styled.a`
  ${sharedTypographyStyles}

  color: ${theme.pallet.LIGHT_BLUE_2};
`;

export const Emphasized = styled.span`
  font-size: 14px;
  ${(props: { color: string }) => {
    return `
  color: ${props.color};`;
  }};
  font-weight: bold;
`;
