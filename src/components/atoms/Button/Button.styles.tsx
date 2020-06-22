import styled from 'styled-components';
import {
  size,
  pxToRem,
  flexRow,
  marginChildren,
} from '@faxi/web-css-utilities';

type ButtonStylingProps = {
  width?: string;
  height?: string;
  background?: string;
  fontColor?: string;
};

export const Button = styled.button`
  border: none;
  cursor: pointer;
  font: inherit;
  ${(props: ButtonStylingProps) =>
    `
    ${size(
      props.width ? props.width : 'fit-content',
      props.height ? props.height : props.width ? props.width : 'fit-content'
    )};
  `};
  background: ${(props: ButtonStylingProps) =>
    props.background ? props.background : 'white'};
  color: ${(props: ButtonStylingProps) =>
    props.fontColor ? props.fontColor : 'black'};

  p {
    margin: 0;
  }

  &:focus {
    outline: none;
  }

  &.button {
    &--secondary {
      background: transparent;
      font-size: ${pxToRem('14px')};
      ${flexRow('center', 'center')};
      ${size('fit-content')};
      padding: 0;
      ${marginChildren(`0 ${pxToRem('12px')} 0 0`)}

      p {
        text-decoration: underline;
      }
    }
  }
`;
