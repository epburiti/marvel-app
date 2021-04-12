import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  margin: 8rem auto;

  .container-header {
    box-shadow: 0 0.4rem 0.8rem 1rem rgba(0, 0, 0, 0.2);
    display: flex;
    img {
      width: 20rem;
    }
    .header-right {
      margin-left: 5%;
      width: 50%;
    }
    .name-header {
      font-size: 5rem;
      color: var(--black1);
    }
    .description {
      font-size: 1.6rem;
      color: var(--black2);
      margin-top: 5rem;
      text-align: justify;
    }
  }
`;
