import styled from 'styled-components';

interface Props {
  justifyContent: string;
  imageHeight: string;
}

export const Container = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justifyContent};
  flex: 1;
  max-height: fit-content;
  max-width: 100%;

  h1 {
    margin: auto 0;
    margin-left: 2.5rem;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 100%;
  }

  img {
    height: ${(props) => props.imageHeight};
  }
`;
