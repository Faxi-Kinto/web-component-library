import styled from 'styled-components';
import { flexRow } from '@faxi/web-css-utilities';
import { pxToRem, size } from '@faxi/web-css-utilities';
import { defaultFontSize } from '@faxi/web-css-utilities/constants';

type ContainerProps = {
  size?: string;
};

export const Container = styled.div`
  ${flexRow('center', 'center')};
  ${(props: ContainerProps): string =>
    props.size
      ? `${size(props.size)}; font-size: ${props.size}`
      : `${size(pxToRem(defaultFontSize))}; font-size: ${pxToRem(
          defaultFontSize
        )}`};
`;

export const IconSet = styled.div`
  ${flexRow()};

  > * {
    margin: ${pxToRem('10px')};
  }
`;
