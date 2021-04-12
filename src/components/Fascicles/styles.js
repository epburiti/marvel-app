import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .content-comics {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h5 {
    font-size: 5rem;
    color: var(--black1);
    margin-bottom: 1rem;
  }
  hr {
    width: 80%;
    height: 0.1rem;
    background: var(--black3);
    margin: 0 auto;
  }

  .card-comics {
    display: flex;
    margin: 4rem 0;
    box-shadow: 0 0.4rem 0.8rem 0.5rem rgba(0, 0, 0, 0.2);
    width: 95%;

    .comics-right {
      p {
        font-size: 1.6rem;
        color: var(--black2);
      }
      .description {
        width: 90%;
        text-align: justify;
        margin: 0 auto;
      }
      div {
        font-weight: bold;
        display: flex;
        justify-content: space-between;
        padding: 3rem;
        p {
          color: var(--black1);
          margin-right: 2rem;
        }
      }
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
    .description {
      font-size: 1rem;
    }

    .comics-right {
      p {
        font-size: 1rem !important;
        /* text-overflow: */
      }
    }
  }
`;
