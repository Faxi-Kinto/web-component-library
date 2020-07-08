import styled from 'styled-components';
import { pxToRem } from '@faxi/web-css-utilities';

const sharedTypographyStyles = `
  padding: 0;
  margin: 0;
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

  font-size: ${pxToRem('34px')};
  line-height: ${pxToRem('47px')};
  font-weight: bold;
  color: ${props => props.color};
`;

export const Heading2 = styled.h2`
  ${sharedTypographyStyles}

  font-size: ${pxToRem('30px')};
  line-height: ${pxToRem('42px')};
  font-weight: bold;
  color: ${props => props.color};
`;

export const Heading3 = styled.h3`
  ${sharedTypographyStyles}

  font-size: ${pxToRem('24px')};
  line-height: ${pxToRem('34px')};
  font-weight: 500;
  color: ${props => props.color};
`;

export const Heading4 = styled.h4`
  ${sharedTypographyStyles}

  font-size: ${pxToRem('18px')};
  line-height: ${pxToRem('25px')};
  font-weight: bold;
  color: ${props => props.color};
`;

export const Heading5 = styled.h5`
  ${sharedTypographyStyles}

  font-size: ${pxToRem('14px')};
  line-height: ${pxToRem('20px')};
  font-weight: 400;
  color: ${props => props.color};
`;

export const Heading6 = styled.h6`
  ${sharedTypographyStyles}

  font-size: ${pxToRem('12px')};
  line-height: ${pxToRem('17px')};
  font-weight: 400;
  color: ${props => props.color};
`;

export const Paragraph1 = styled.p`
  ${sharedTypographyStyles}

  font-size: ${pxToRem('18px')};
  line-height: ${pxToRem('25px')};
  font-weight: 400;
  color: ${props => props.color};
`;

export const Paragraph2 = styled.p`
  ${sharedTypographyStyles}

  font-size: ${pxToRem('16px')};
  line-height: ${pxToRem('23px')};
  font-weight: 400;
  color: ${props => props.color};
`;

export const Small = styled.small`
 ${sharedTypographyStyles}

  font-size: ${pxToRem('14px')};
  line-height: ${pxToRem('20px')};
  font-weight: 400;
  color: ${props => props.color};
`;

export const Link = styled.a`
  ${sharedTypographyStyles}
  color: ${props => props.color};
`;

export const Emphasized = styled.span`
  font-size: ${pxToRem('14px')};
  color: ${props => props.color};
  font-weight: bold;
`;
