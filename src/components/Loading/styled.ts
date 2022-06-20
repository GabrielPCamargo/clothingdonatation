import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;

  .loading {
    border: 8px solid rgba(0, 0, 0, 0.1);
    border-left-color: #22a6b3;
    border-radius: 50%;
    width: 75px;
    height: 75px;
    animation: spin 1s ease infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
