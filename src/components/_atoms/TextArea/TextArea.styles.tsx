import styled from 'styled-components';
import { marginChildren, pxToRem, padding } from '@faxi/web-css-utilities';

export const TextAreaStyled = styled.div`
  width: 100%;
  ${marginChildren(`0 0 ${pxToRem('10px')} 0`)};

  > textarea {
    width: 100%;
    min-height: ${pxToRem('45px')};
    ${padding(pxToRem('8px'), pxToRem('16px'))};
    outline: none;
    font-family: inherit;

    &.textarea {
      &--noresize {
        resize: none;
      }

      &--horizontal-resize {
        resize: horizontal;
      }

      &--vertical-resize {
        resize: vertical;
      }

      &--error {
        border: ${pxToRem('0.5px')} solid #eb4820;
      }
    }
  }
`;
