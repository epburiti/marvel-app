import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--main);

  .myCredentials {
    position: fixed;
    bottom: 0;
    font-size: 1.3rem;
    left: 0;
    padding: 1rem;
    color: var(--black2);
    span {
      font-weight: bold;
      color: var(--black1);
    }
  }
`;
