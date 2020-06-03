import styled from 'styled-components';
import { theme } from '../../../config';
import { pxToRem } from '../../../styles/basics';
import { marginChildren } from '../../../styles/spacings';
import { label } from '../../../styles/input';
import { boxShadow, padding } from '../../../styles/basics';

export const InputContainer = styled.div`
  width: 100%;
  ${marginChildren(`0 0 ${pxToRem('10px')} 0`)};

  > label {
    ${label}
  }

  > input {
    width: 100%;
    height: ${pxToRem('45px')};
    ${padding(pxToRem('8px'), pxToRem('16px'))};
    ${boxShadow(
      pxToRem('8px'),
      pxToRem('8px'),
      pxToRem('20px'),
      theme.pallet.SHADOW
    )};
    border: ${pxToRem('1px')} solid ${theme.pallet.DISABLED};
    outline: none;
    &.input--error {
      border: ${pxToRem('1px')} solid ${theme.pallet.ERROR};
    }
    &:focus,
    &.input--error {
      box-shadow: none;
    }
  }
`;
