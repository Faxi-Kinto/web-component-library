import styled from 'styled-components';
import { theme } from '../../config';
import { size, positionAbsolute, padding } from '../../styles/basics';
import { flexRow } from '../../styles/flex';
import { pxToRem } from '../../styles/basics';

const defaultSize = pxToRem('20px');

export const Container = styled.label`
  position: relative;
  cursor: pointer;
  min-height: ${defaultSize};
  padding-left: ${pxToRem('20px')};
  ${flexRow('initial', 'center')};

  > input {
    display: none;
  }

  &:before {
    content: '';
    display: inline-block;
    box-sizing: border-box;
    border: ${theme.pallet.ACCENT_1} solid ${pxToRem('1px')};
    ${positionAbsolute('0', '', '', '0')};
    ${size(defaultSize)};
  }

  > span {
    line-height: ${defaultSize};
  }

  &.checked {
    &:after {
      background: url('assets/icons/checkmark.svg') 100% no-repeat;
      content: '';
      ${size(pxToRem('13px'), pxToRem('9px'))};
      ${positionAbsolute(pxToRem('5.5px'), '', '', pxToRem('3px'))};
    }
  }

  &.label--has-label-text {
    padding-left: ${pxToRem('28px')};
  }

  &.label--has-error {
    > input {
      color: ${theme.pallet.ERROR};
    }

    &:before {
      border: ${theme.pallet.ERROR} solid ${pxToRem('1px')};
    }
  }

  &.label--left {
    ${padding('0', pxToRem('28px'), '0', '0')};

    &:before {
      ${positionAbsolute('0', '0', '', 'auto')};
    }

    &.checked {
      &:after {
        ${positionAbsolute(pxToRem('5.5px'), pxToRem('4px'), '', 'auto')}
      }
    }
  }
`;
