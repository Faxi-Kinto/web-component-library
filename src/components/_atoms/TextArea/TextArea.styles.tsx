import styled from 'styled-components';
import { marginChildren, pxToRem, padding } from '@faxi/web-css-utilities';

export const TextAreaStyled = styled.div`
  width: 100%;
  ${marginChildren(`0 0 ${pxToRem('10px')} 0`)};

  > textarea {
    width: 100%;
    height: ${pxToRem('45px')};
    ${padding(pxToRem('8px'), pxToRem('16px'))};
    outline: none;

    &:focus,
    &.textarea--error {
      box-shadow: none;
    }
  }
`;
