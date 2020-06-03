import styled from 'styled-components';
import { theme } from '../../../config';
import { size, positionAbsolute, padding } from '../../../styles/basics';
import { pxToRem } from '../../../styles/basics';

export const Container = styled.div`
  position: relative;
  border: ${pxToRem('0.5px')} solid ${theme.pallet.DISABLED};
  background-color: ${theme.pallet.WHITE};
  ${padding(pxToRem('18px'), pxToRem('30px'), pxToRem('16px'))};

  &.info-box--has-icon {
    ${padding(
      pxToRem('18px'),
      pxToRem('30px'),
      pxToRem('16px'),
      pxToRem('50px')
    )};
  }

  .info-box__icon {
    color: ${theme.pallet.LIGHT_BLUE_2};
    ${size(pxToRem('22px'))};
    ${positionAbsolute(pxToRem('10px'), '', '', pxToRem('13px'))};
  }
`;
