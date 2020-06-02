import styled from 'styled-components';
import { flexRow } from '../../styles/flex';
import { size } from '../../styles/basics';
import { marginChildren } from '../../styles/spacings';
import { pxToRem } from '../../styles/basics';

type ContainerProps = {
  iconSize: string;
};

export const Container = styled.div`
  ${flexRow('space-between')}
  ${marginChildren(`0 ${pxToRem('32px')} 0 0`)};

  a {
    ${(props: ContainerProps): string => {
      return size(props.iconSize);
    }}
  }
`;
