import styled from 'styled-components';

export const Container = styled.div`
  margin: 13rem auto;

  .container-header {
    width: 95%;
    margin: 0 auto;
    box-shadow: 0 0.4rem 0.8rem 1rem rgba(0, 0, 0, 0.2);
    display: flex;

    .header-right {
      margin-left: 5%;
      padding: 2rem;
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
      width: 90%;
    }
  }
  .desktop {
    display: block !important;
  }
  .mobile {
    display: none !important;
  }
  @media (max-width: 700px) {
    .desktop {
      display: none !important;
    }
    .mobile {
      display: block !important;
    }
    .name-header {
      font-size: 2rem !important;
    }
    .description {
      font-size: 1rem !important;
    }
  }
`;
