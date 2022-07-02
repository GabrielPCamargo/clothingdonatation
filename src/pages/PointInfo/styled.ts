import styled from 'styled-components';

export const Container = styled.div`
  #map {
    width: 70vw;
    height: 100vh;
  }

  button {
    display: block;
    margin-top: 1rem !important;
    padding: 0.5rem 1rem;
    background: #0243ec;
    margin: 0 auto;
    border-radius: 6px;
    color: #fff;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 100%;
    text-align: center;
    cursor: pointer;
  }

  h3 {
    margin-left: 3rem;
  }

  section {
    padding: 3rem;
  }

  aside {
    position: absolute;
    top: 0;
    right: 0;
    width: 30vw;
    text-align: left;

    header {
      text-align: left;
      width: 100%;
      display: flex;
      justify-content: center;
      max-height: 10vh;
      padding-top: 4rem;
    }

    h3 {
      margin-top: 2rem;
    }

    p {
      margin: 3rem 2rem;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 125%;
      color: #cbdbff;
    }

    h4 {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 125%;
      margin: 5rem 6rem;
      text-align: center;
    }

    button {
      margin-top: 4rem;
      padding: 0.5rem 5rem;
      background: #0243ec;
      border-radius: 6px;
      color: #fff;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 100%;
    }
  }

  .info {
    text-align: center;
    max-width: 8rem;

    span {
      display: block;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 1rem;
      line-height: 100%;
    }

    button {
      margin-top: 1rem;
      padding: 0.5rem 1rem;
      background: #0243ec;
      border-radius: 6px;
      color: #fff;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 10px;
      line-height: 100%;
      cursor: pointer;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: all 0.5s;
  }
`;
