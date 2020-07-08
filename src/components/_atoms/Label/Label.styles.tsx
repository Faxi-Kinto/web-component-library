import styled from 'styled-components';
import { pxToRem } from '@faxi/web-css-utilities';

export const Label = styled.label`
  display: inline-flex;
  height: ${pxToRem('24px')};
  align-items: flex-end;
  margin-bottom: ${pxToRem('5px')};
`;
