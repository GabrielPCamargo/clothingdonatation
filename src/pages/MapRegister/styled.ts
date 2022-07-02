import styled from 'styled-components';

export const Container = styled.div`
  #map {
    position: absolute;
    right: 0;
    width: 50vw;
    height: 100vh;
  }

  aside {
    position: absolute;
    top: 0;
    left: 0;
    width: 50vw;
    text-align: center;

    header {
      text-align: left;
      width: 100%;
      display: flex;
      justify-content: center;
      max-height: 10vh;
      padding-top: 2rem;

      .titlebox {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
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
        height: 100%;
      }
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
`;

export const Form = styled.form`
  display: block;
  margin: 2rem auto;
  text-align: center;
  max-width: 25vw;

  h2 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 125%;
    margin-bottom: 2rem;
  }

  label {
    text-align: left;
    display: flex;
    flex-direction: column;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    line-height: 100%;

    & + label {
      margin-top: 1.5rem;
    }
  }

  input,
  select {
    margin-top: 0.25rem;
    background: #445275;
    border: 1px solid #1656fd;
    border-radius: 6px;
    padding: 0.5rem;
    color: #fff;
    font-size: 1rem;

    li {
      padding: 0.5rem;
    }
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
    cursor: pointer;
  }
`;
