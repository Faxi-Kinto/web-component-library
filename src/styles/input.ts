import { css } from 'styled-components';
import { theme } from '../config';
import { fontSize } from './basics';

export const label = css`
  color: ${theme.pallet.GRAY};
  display: inline-flex;
  height: 24px;
  align-items: flex-end;
  margin-bottom: 5px;
  ${fontSize('16px')}
`;
