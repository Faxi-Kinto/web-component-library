import styled from 'styled-components';
import { pxToRem } from '@faxi/web-css-utilities';

export const Spinner = styled.div`
  &.spinner {
    ${(props: { size: number; color: string; backgroundColor: string }) => {
      return `
      width: ${pxToRem(`${props.size}px`)};
      height: ${pxToRem(`${props.size}px`)};
      background-color: ${props.backgroundColor};
      `;
    }};
  }

  * {
    box-sizing: border-box;
  }

  .spinner-part {
    overflow: hidden;
    height: ${props => pxToRem(`${props.size / 2}px`)};
    width: ${props => pxToRem(`${props.size}px`)};
  }
  .spinner-part.bottom {
    transform: rotate(180deg) scale(-1, 1);
  }
  .spinner-rotator {
    width: ${props => pxToRem(`${props.size}px`)};
    height: ${props => pxToRem(`${props.size}px`)};
    border: ${props => pxToRem(`${props.size / 7}px`)} solid transparent;
    border-right-color: ${props => props.color};
    border-top-color: ${props => props.color};
    border-radius: 50%;
    box-sizing: border-box;
    animation: spinner-animation 3000ms ease-in-out infinite;
    transform: rotate(-200deg);
  }
  @keyframes spinner-animation {
    0% {
      border-width: ${props => pxToRem(`${props.size / 7}px`)};
    }
    25% {
      border-width: ${props => pxToRem(`${props.size / 23.33}px`)};
    }
    50% {
      transform: rotate(115deg);
      border-width: ${props => pxToRem(`${props.size / 7}px`)};
    }
    75% {
      border-width: ${props => pxToRem(`${props.size / 23.33}px`)};
    }
    100% {
      border-width: ${props => pxToRem(`${props.size / 7}px`)};
    }
  }
`;
