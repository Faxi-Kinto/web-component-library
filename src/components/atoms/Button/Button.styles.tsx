import styled from 'styled-components';
import {
  size,
  pxToRem,
  flexRow,
  marginChildren,
} from '@faxi/web-css-utilities';

export const Button = styled.button`
  ${size(pxToRem('350px'), pxToRem('45px'))};
  border: none;
  color: white;
  cursor: pointer;

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
