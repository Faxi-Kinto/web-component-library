import styled from 'styled-components';
import {
  size,
  pxToRem,
  flexRow,
  marginChildren,
  padding,
} from '@faxi/web-css-utilities';

export const Button = styled.button`
  ${padding(pxToRem('15px'), pxToRem('50px'))};
  border: none;
  cursor: pointer;
  font: inherit;

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

    &--disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;
