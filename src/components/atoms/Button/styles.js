import styled from 'styled-components';

export const Container = styled.button`
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
  font-weight: 500;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 700px) {
    font-size: 1rem;
    padding: 0 1rem;
  }
`;
