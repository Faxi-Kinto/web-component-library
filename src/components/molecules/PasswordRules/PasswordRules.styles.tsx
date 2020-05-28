import styled from 'styled-components';
import { pxToRem } from 'styles/fonts';

export const Container = styled.div`
  width: 100%;

  .password_rules_wrapper {
    &_password_rule_characters {
      display: flex;
      &--icons {
        display: inline-block;
        width: ${pxToRem('26px')};
        div {
          display: inline-block;
          margin-right: 10px;
        }
      }

      &--message {
        display: inline-block;
        p {
          display: inline-block;
        }
        span {
          font-weight: 500;
        }
      }
    }

    &_password_rule_number {
      display: flex;
      &--icons {
        display: inline-block;
        width: ${pxToRem('26px')};
        div {
          display: inline-block;
          margin-right: 10px;
        }
      }

      &--message {
        display: inline-block;
        p {
          display: inline-block;
        }
        span {
          font-weight: 500;
        }
      }
    }

    &_password_rule_letters {
      display: flex;
      &--icons {
        display: inline-block;
        width: ${pxToRem('26px')};
        div {
          display: inline-block;
          margin-right: 10px;
        }
      }

      &--message {
        display: inline-block;
        p {
          display: inline-block;
        }
        span {
          font-weight: 500;
        }
      }
    }
  }
`;
