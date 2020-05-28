import styled from 'styled-components';
import { theme } from 'config';
import { size, positionAbsolute } from 'styles/basics';
import { flexRow } from 'styles/flex';

const defaultSize = '20px';

export const Container = styled.label`
  position: relative;
  cursor: pointer;
  min-height: ${defaultSize};
  padding-left: 20px;
  ${flexRow('initial', 'center')};

  > input {
    display: none;
  }

  &:before {
    content: '';
    display: inline-block;
    box-sizing: border-box;
    border: ${theme.pallet.ACCENT_1} solid 1px;
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
      ${size('13px', '9px')};
      ${positionAbsolute('5.5px', '', '', '3px')}
    }
  }

  &.label--has-label-text {
    padding-left: 28px;
  }

  &.label--has-error {
    > input {
      color: ${theme.pallet.ERROR};
    }

    &:before {
      border: ${theme.pallet.ERROR} solid 1px;
    }
  }

  &.label--left {
    padding: 0 28px 0 0;

    &:before {
      ${positionAbsolute('0', '0', '', 'auto')};
    }

    &.checked {
      &:after {
        ${positionAbsolute('5.5px', '4px', '', 'auto')}
      }
    }
  }
`;
