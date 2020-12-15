import {
  flexRow,
  fontSize,
  positionAbsolute,
  pxToRem,
  size,
} from '@faxi/web-css-utilities';
import styled from 'styled-components';

export const Container = styled.div`
  label,
  .tags-error {
    ${fontSize('14px', '20px')};

    font-weight: 500;
  }

  label {
    display: block;
    margin-bottom: ${pxToRem('24px')};
  }

  .tags-label {
    &--error {
      margin-bottom: 0;
    }
  }

  .tags-error {
    color: #eb4820;
    margin-top: ${pxToRem('4px')};
  }

  .tags-input {
    border-bottom: solid 1px #95a1a6;

    &__wrapper {
      ${fontSize('16px', '23px')};

      margin: 0 -${pxToRem('4px')};
      position: relative;
      padding-bottom: ${pxToRem('12px')};
      min-height: ${pxToRem('25px')};
      height: auto;
      box-sizing: content-box;
      display: flex;
      align-items: flex-start;
      flex-wrap: wrap;

      > * {
        margin: ${pxToRem('4px')};
      }

      input {
        ${size('140px', '25px')};

        font: inherit;
        color: #95a1a6;
        border: none;

        &:focus {
          outline: none;

          & + .tags-input__placeholder {
            display: none;
          }
        }
      }
    }

    &__entry {
      ${flexRow('center', 'center')};

      min-height: ${pxToRem('25px')};
      padding: 0 ${pxToRem('8px')};
      color: #95a1a6;
      border: solid 1px;
      word-break: break-word;

      &--error {
        border-color: #eb4820;
      }

      > button {
        ${size('20px')};

        cursor: pointer;
        display: flex;
        align-items: center;
        padding: 0;
        background: none;
        margin-left: 0.5rem;
        border: none;

        &:focus {
          outline: none;
        }

        i.close {
          ${size('100%')};

          display: inline-block;
          position: relative;

          &::before,
          &::after {
            ${size('12px', '2px')};
            ${positionAbsolute('50%', '50%')};

            content: '';
            background-color: #10a5b5;
          }

          &::before {
            transform: translate(50%, -50%) rotateZ(45deg);
          }

          &::after {
            transform: translate(50%, -50%) rotateZ(-45deg);
          }
        }
      }
    }

    &__placeholder {
      position: absolute;
      color: #95a1a6;
      opacity: 0.5;
    }
  }
`;
