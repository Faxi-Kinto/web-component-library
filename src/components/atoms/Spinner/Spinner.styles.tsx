import styled from 'styled-components';
import { size } from 'styles/basics';

export const Spinner = styled.div`
  margin: auto;
  ${size('36px')};
  border: 4px white solid;
  border-top: 4px gray solid;
  border-right: 4px gray solid;
  border-bottom: 4px gray solid;
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
