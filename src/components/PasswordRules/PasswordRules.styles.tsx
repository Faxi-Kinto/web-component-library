import styled from 'styled-components';
import { pxToRem } from '../../styles/basics';
import { flexRow } from '../../styles/flex';
import { marginChildren } from '../../styles/spacings';
import { size } from '../../styles/basics';

export const Container = styled.div`
  width: 100%;
  ${marginChildren(`0 0 ${pxToRem('10px')}`)};

  .password_rules {
    &__rule {
      display: flex;
      ${flexRow('flex-start', 'flex-start')};
      ${marginChildren(`0 ${pxToRem('10px')} 0 0`)};

      &__icon {
        margin-top: ${pxToRem('2px')};
        ${size(pxToRem('10px'))};
      }
    }
  }
`;
