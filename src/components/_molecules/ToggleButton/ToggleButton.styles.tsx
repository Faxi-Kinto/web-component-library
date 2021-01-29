import styled, { css } from 'styled-components';
import { pxToRem } from '@faxi/web-css-utilities';
import { mobile } from '@faxi/web-css-utilities/breakpoints';
import { ToggleButtonProps } from './ToggleButton.component';

export const ToggleButtonStyled = styled.div`
  display: flex;
  align-items: center;

  ${mobile(css`
    flex-direction: column;
    align-items: center;
    .label {
      margin-top: ${pxToRem('8px')};
    }
  `)};

  .wcl-toggle {
    &__toggle {
      position: relative;
      display: inline-block;
      width: ${pxToRem('41px')};
      height: ${pxToRem('20px')};

      input {
        opacity: 0;
        width: 0;
        height: 0;
      }

      &__slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #c6cdcf;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        border-radius: ${pxToRem('16px')};

        &--disabled {
          cursor: not-allowed;
        }
      }

      &__slider:before {
        position: absolute;
        content: '';
        height: ${pxToRem('25px')};
        width: ${pxToRem('25px')};
        transform: translateY(-50%);
        top: 50%;
        left: -${pxToRem('4px')};
        background-color: #95a1a6;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        border-radius: 50%;
      }

      input:checked + .wcl-toggle__toggle__slider {
        background-color: ${(props: ToggleButtonProps) => props.secondaryColor};
        &:before {
          background-color: ${(props: ToggleButtonProps) => props.primaryColor};
        }
      }

      input:focus + .wcl-toggle__toggle__slider {
        box-shadow: 0 0 1px #dceeef;
      }

      input:checked + .wcl-toggle__toggle__slider:before {
        left: 100%;
        transform: translate(-${pxToRem('21px')}, -50%);
      }
    }

    &__label {
      font-size: ${pxToRem('12px')};
      color: #4e606a;
      margin-left: ${pxToRem('16px')};

      ${mobile(css`
        margin-left: 0;
      `)};
    }
  }
`;
