import styled from 'styled-components';
import { theme } from 'config';
import { size, positionAbsolute } from 'styles/basics';

export const Container = styled.div`
  position: relative;
  border: 0.5px solid ${theme.pallet.DISABLED};
  background-color: ${theme.pallet.WHITE};
  padding: 18px 30px 16px;

  &.info-box--has-icon {
    padding: 18px 30px 16px 50px;
  }

  .info-box__icon {
    color: ${theme.pallet.LIGHT_BLUE_2};
    ${size('22px')};
    ${positionAbsolute('10px', '', '', '13px')};
  }
`;
