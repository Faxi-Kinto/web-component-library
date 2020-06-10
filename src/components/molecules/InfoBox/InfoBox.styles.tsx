import styled from 'styled-components';
import {
  padding,
  pxToRem,
  size,
  positionAbsolute,
} from '@faxi/web-css-utilities';

export const Container = styled.div`
  position: relative;
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
    ${size(pxToRem('22px'))};
    ${positionAbsolute(pxToRem('10px'), '', '', pxToRem('13px'))};
  }
`;
