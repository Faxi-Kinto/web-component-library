import styled from 'styled-components';
import { listView } from 'styles/containers';
import { pxToRem } from 'styles/fonts';

export const FormContainer = styled.form`
  height: 100%;
  ${listView(pxToRem('24px'), 'initial', 'stretch')};

  .continue-button {
    margin-top: ${pxToRem('24px')};
  }
`;
