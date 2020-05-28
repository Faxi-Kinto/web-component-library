import styled from 'styled-components';
import { theme } from 'config';
import { pxToRem } from 'styles/fonts';
import { marginChildren } from 'styles/spacings';
import { label } from 'styles/input';

export const InputContainer = styled.div`
  width: 100%;
  ${marginChildren(`0 0 ${pxToRem('10px')} 0`)};

  > label {
    ${label}
  }

  > input {
    width: 100%;
    height: ${pxToRem('45px')};
    padding: 0.5rem 1rem;
    box-shadow: 8px 8px 20px ${theme.pallet.SHADOW};
    border: 1px solid ${theme.pallet.DISABLED};
    outline: none;
    &.input--error {
      border: 1px solid ${theme.pallet.ERROR};
    }
    &:focus,
    &.input--error {
      box-shadow: none;
    }
  }
`;
