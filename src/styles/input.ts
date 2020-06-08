import { css } from 'styled-components';
import { fontSize } from './basics';

export const label = css`
  display: inline-flex;
  height: 24px;
  align-items: flex-end;
  margin-bottom: 5px;
  ${fontSize('16px')}
`;
