import styled from 'styled-components';
import { size } from 'styles/basics';
import { flexRow } from 'styles/flex';
import { theme } from 'config';
import { marginChildren } from 'styles/spacings';
import { pxToRem } from 'styles/fonts';

export const Button = styled.button`
  background-image: linear-gradient(
    to right,
    ${theme.pallet.DARK_CYAN},
    ${theme.pallet.LIGHT_BLUE}
  );
  ${size('350px', '45px')};
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &.button {
    &--secondary {
      background: transparent;
      font-size: ${pxToRem('14px')};
      ${flexRow('center', 'center')};
      ${size('fit-content')};
      padding: 0;
      ${marginChildren(`0 ${pxToRem('12px')} 0 0`)}

      p {
        color: ${theme.pallet.GRAY};
        text-decoration: underline;
        font-weight: 100;
      }
    }
  }
`;
