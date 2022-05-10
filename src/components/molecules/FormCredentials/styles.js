import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  padding: 4rem;
  box-shadow: 0 0.4rem 0.8rem 0 rgba(0, 0, 0, 0.2);
  background-color: var(--white);
  &,
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  form {
    width: 100%;
    div,
    input {
      width: 100%;
    }
    button {
      background-color: var(--btn);
      padding: 1rem;
      color: var(--white);
      font-size: 1.6rem;
      border-radius: 0.4rem;
      cursor: pointer;
      margin-top: 1rem;
    }
  }
  h5 {
    margin-bottom: 2.5rem;
    font-size: 2.5rem;
  }

  @media (max-width: 1000px) {
    width: 90%;
  }
`;
export const Input = styled.input`
  background: #f0f0f5;
  border-radius: 0.8rem;
  border: 0.05rem solid #f0f0f5;
  font-size: 1.5rem;
  padding: 10px 20px;
  color: var(--colorInput);
  margin-bottom: 1.3rem;

  &::placeholder {
    color: var(--black2);
  }
`;
