import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  .container {
    padding: 2rem 8rem;
    height: calc(100% - 4rem);
  }

  header {
    display: flex;
    justify-content: space-between;
    max-height: 15vh;

    .titlebox {
      display: flex;
      align-items: center;
      flex: 1;
    }

    .titlebox h1 {
      margin: auto 0;
      margin-left: 2.5rem;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 36px;
      line-height: 100%;
    }

    .titlebox img {
      height: 75%;
    }

    nav ul {
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
    }

    a {
      color: inherit;
      text-decoration: none;
      transition: all 0.5s;
    }

    a:hover {
      color: #999;
    }
  }
`;

export const IndexSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;

  div {
    width: 50%;
  }
  .map {
    text-align: center;
    padding-bottom: 5rem;

    img {
      width: 65%;
    }
  }

  .info {
    h2 {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      line-height: 150%;
      text-decoration-line: underline;
      text-transform: uppercase;
      color: #e6eaf5;
      width: 75%;
    }

    p {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 125%;

      margin-top: 5rem;
      margin-left: 7rem;
      width: 55%;
    }

    button {
      background: #0243ec;
      color: #fff;
      padding: 0.65rem 6rem;
      text-align: center;
      margin-top: 3rem;
      margin-left: 10rem;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 100%;
      cursor: pointer;
      transition: all 0.5s;

      &:hover {
        background: #002583;
      }
    }
  }
`;
