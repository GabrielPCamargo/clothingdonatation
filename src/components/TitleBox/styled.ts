import styled from 'styled-components';

interface Props {
  justifyContent: string;
  imageHeight: string;
}

export const Container = styled.div<Props>`
  max-width: 100%;

  div.link {
    display: flex;
    align-items: center;
    justify-content: ${(props) => props.justifyContent};
    flex: 1;
    max-height: fit-content;
    height: 100%;

    a {
      height: 100%;
      color: inherit;
      text-decoration: none;

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
    }
  }
`;
