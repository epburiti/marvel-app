import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  margin: 4rem 0;
`;

export const Form = styled.form`
  display: flex;
  box-shadow: 0 0.4rem 0.8rem 0 rgba(0, 0, 0, 0.2);
  input {
    background: #fcfcfc;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    border: none;
    padding: 0.5rem 0.5rem;
    font-size: 1.6rem;
    color: var(--black1);
  }
  button {
    padding: 0.2rem 1rem;
    margin: 0rem;
    border-radius: 0;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
`;
