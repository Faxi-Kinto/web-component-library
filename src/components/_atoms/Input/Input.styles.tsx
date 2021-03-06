import styled from 'styled-components';
import { marginChildren, pxToRem, padding } from '@faxi/web-css-utilities';

export const InputContainer = styled.div`
  width: 100%;
  ${marginChildren(`0 0 ${pxToRem('10px')} 0`)};

  > input {
    width: 100%;
    height: ${pxToRem('46px')};
    ${padding(pxToRem('8px'), pxToRem('16px'))};
    outline: none;

    &--disabled {
      cursor: not-allowed;
    }
  }
`;
