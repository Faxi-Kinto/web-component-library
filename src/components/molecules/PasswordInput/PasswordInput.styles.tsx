import styled from 'styled-components';
import { positionAbsolute } from 'styles/basics';
import { theme } from 'config';
import { fontSize } from 'styles/fonts';

export const Container = styled.div`
  width: 100%;

  > label {
    color: ${theme.pallet.GRAY};
    display: flex;
    height: 24px;
    align-items: flex-end;
    margin-bottom: 5px;
    ${fontSize('16px')}
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  input {
    padding-right: 70px;
  }
`;

export const EyeIconWrapper = styled.div`
  ${positionAbsolute('14px', '37px', '', '')};
`;

export const CapslookIconWrapper = styled.div`
  ${positionAbsolute('14px', '16px', '', '')};
`;
