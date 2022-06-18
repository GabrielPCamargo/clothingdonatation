import styled from 'styled-components';

export const Container = styled.nav`
  ul {
    flex: 1;
    list-style: none;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;

    & li {
      display: block;
      margin: 2rem;
    }

    a {
      cursor: pointer;
      color: inherit;
      text-decoration: none;
      transition: all 0.5s;
    }

    a:hover {
      color: #999;
    }
  }
`;
