import styled from 'styled-components';
import { pxToRem } from 'styles/fonts';
import { theme } from 'config';
import { label } from 'styles/input';

export const Container = styled.div`
  > label {
    ${label}
  }

  .number-field {
    display: flex;
    box-shadow: 8px 8px 20px ${theme.pallet.SHADOW};
    &:focus-within {
      box-shadow: none;
    }
  }

  .number-field__dropdown {
    min-width: ${pxToRem('65px')};
    max-width: ${pxToRem('75px')};
    select {
      border-right: none;
      box-shadow: none;
      margin: 0;
      padding: 0.5rem;
    }
    .__icon {
      top: 18px;
      right: 8px;
      font-size: 0.7rem;
      color: ${theme.pallet.GRAY_BLUE};
    }
  }
  input {
    box-shadow: none;
    font-size: ${pxToRem('14px')};
  }
  .number-field__description-msg,
  .number-field__error-msg {
    flex-basis: 100%;
    margin-top: 10px;
    color: ${theme.pallet.LIGHT_GRAY};
    line-height: ${pxToRem('20px')};
  }
  .number-field__error-msg {
    font-size: ${pxToRem('14px')};
    color: ${theme.pallet.ERROR};
  }
`;
