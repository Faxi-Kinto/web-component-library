import styled from 'styled-components';
import { positionAbsolute, pxToRem, fontSize } from '../../styles/basics';
import { theme } from '../../config';

export const Container = styled.div`
  width: 100%;

  > label {
    color: ${theme.pallet.GRAY};
    display: flex;
    height: ${pxToRem('24px')};
    align-items: flex-end;
    margin-bottom: ${pxToRem('5px')};
    ${fontSize('16px')}
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  input {
    padding-right: ${pxToRem('70px')};
  }
`;

export const EyeIconWrapper = styled.div`
  ${positionAbsolute(pxToRem('14px'), pxToRem('28px'), '', '')};
`;

export const CapslookIconWrapper = styled.div`
  ${positionAbsolute(pxToRem('14px'), pxToRem('16px'), '', '')};
`;
