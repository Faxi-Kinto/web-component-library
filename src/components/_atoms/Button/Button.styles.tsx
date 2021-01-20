import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  cursor: pointer;
  font: inherit;
  padding: unset;

  &:focus {
    outline: none;
  }

  &.button {
    &--secondary {
      background: transparent;
    }

    &--disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;
