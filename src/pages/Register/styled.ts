import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  header {
    display: flex;
    justify-content: center;
    max-height: 10vh;
    padding-top: 4rem;

    .titlebox {
      display: flex;
      justify-content: center;
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
      height: 100%;
    }
  }
`;

export const Form = styled.form`
  display: block;
  margin: 4rem auto;
  text-align: center;
  max-width: 25vw;
  padding-bottom: 5rem;

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
  }
`;
