import styled from 'styled-components';
import { size, pxToRem } from '@faxi/web-css-utilities';

export const Spinner = styled.div`
  margin: auto;
  ${size(pxToRem('36px'))};
  border: ${pxToRem('4px')} gray solid;
  border-left: ${pxToRem('4px')} white solid;
  border-radius: 50%;
  animation: spin 1s infinite linear;

  @keyframes spin {
    from {
      transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
      transform: rotate(359deg);
    }
  }
`;
