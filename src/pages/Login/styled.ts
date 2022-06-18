import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  header {
    display: flex;
    justify-content: center;
    max-height: 10vh;
    padding-top: 4rem;
  }
`;

export const Form = styled.form`
  display: block;
  margin: 4rem auto;
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

  input {
    margin-top: 0.25rem;
    background: #445275;
    border: 1px solid #1656fd;
    border-radius: 6px;
    padding: 0.5rem;
    color: #fff;
    font-size: 1rem;
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
