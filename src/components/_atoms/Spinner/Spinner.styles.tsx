import styled from 'styled-components';
import { size } from '@faxi/web-css-utilities';
import { pxToRem } from '@faxi/web-css-utilities';

type SpinnerStylingProps = {
  color: string;
  backgroundColor?: string;
};

export const Spinner = styled.div`
  margin: auto;
  ${size(pxToRem('36px'))};
  border: ${(props: SpinnerStylingProps) =>
    `${pxToRem('4px')} ${props.backgroundColor} solid`};
  border-left: ${(props: SpinnerStylingProps) =>
    `${pxToRem('4px')} ${
      props.backgroundColor ? props.color : 'transparent'
    } solid`};
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
