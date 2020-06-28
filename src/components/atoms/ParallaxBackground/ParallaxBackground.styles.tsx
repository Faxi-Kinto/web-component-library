import styled from 'styled-components';

type BackgroundProps = {
  url: string;
};

export const Background = styled.div`
  height: 100%;
  background: ${(props: BackgroundProps) => `
    url('${props.url}') no-repeat center center fixed`};
  background-size: cover;
`;
