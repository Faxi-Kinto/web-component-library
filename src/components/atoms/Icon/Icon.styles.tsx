import styled from 'styled-components';
import { flexRow } from 'styles/flex';
import { pxToRem } from 'styles/fonts';
import { defaultFontSize } from 'styles/constants';

type ContainerProps = {
  size?: string;
};

export const Container = styled.div`
  display: flex;
  ${(props: ContainerProps): string =>
    props.size
      ? `font-size: ${props.size}`
      : `font-size: ${pxToRem(defaultFontSize)}`};
`;

export const IconSet = styled.div`
  ${flexRow()};

  > * {
    margin: 10px;
  }
`;
