import styled from 'styled-components';
import { theme } from 'config';
import { positionAbsolute } from 'styles/basics';
import { pxToRem, fontSize } from 'styles/fonts';
import { marginChildren } from 'styles/spacings';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  ${marginChildren(`0 0 ${pxToRem('10px')} 0`)};

  > label {
    color: ${theme.pallet.GRAY};
    display: flex;
    height: 24px;
    align-items: flex-end;
    ${fontSize('16px')}
  }

  > select {
    width: 100%;
    height: ${pxToRem('45px')};
    padding: 0.5rem 1rem;

    opacity: 1;
    outline: none;
    background-color: ${theme.pallet.WHITE};
    font-size: ${pxToRem('14px')};
    appearance: none;
    box-shadow: 8px 8px 20px ${theme.pallet.SHADOW};
    border: 0.5px solid ${theme.pallet.DISABLED};
    border-radius: 0;

    &.select--error {
      border: 0.5px solid ${theme.pallet.ERROR};
    }

    &:focus,
    &.select--error {
      box-shadow: none;
    }
  }

  .__icon {
    ${positionAbsolute('50px', '25px', '', '')};
    pointer-events: none;
    color: ${theme.pallet.LIGHT_BLUE_2};
  }

  .dropdown__description-msg,
  .dropdown__error-msg {
    flex-basis: 100%;
    color: ${theme.pallet.DISABLED};
    line-height: ${pxToRem('20px')};
  }
  .dropdown__error-msg {
    font-size: ${pxToRem('14px')};
    color: ${theme.pallet.ERROR};
  }
`;
