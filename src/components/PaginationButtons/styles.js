import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  margin: 4rem 0;

  button {
    display: inline-block;
    font-size: 1.2rem;
    text-align: center;
    text-transform: uppercase;
    color: var(--white);
    background: var(--btn);
    border-radius: 0.5rem;
    height: 5rem;
    width: auto;
    padding: 0 2rem;
    vertical-align: top;
    margin: 0 0.5rem;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    /* position: relative; */
    font-weight: 500;
    &:hover {
      opacity: 0.8;
    }
  }
  @media (max-width: 700px) {
    button {
      font-size: 1rem;
      padding: 0 1rem;
    }
  }
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
