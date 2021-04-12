import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;

  .styled-table {
    margin-top: 4rem;
    border-collapse: collapse;
    font-size: 0.9em;
    font-family: sans-serif;
    width: 90%;
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.15);
  }
  .styled-table thead tr:nth-child(1) {
    background-color: var(--btn);
    color: var(--white);
    text-align: left;
  }
  .styled-table thead tr:nth-child(2) {
    background-color: rgba(0, 152, 121, 0.1);
    text-align: left;
    label,
    input {
      margin-top: 1rem;
    }
  }
  .styled-table th,
  .styled-table td {
    padding: 12px 15px;
    max-width: 33% !important;
    img {
      width: 6rem;
    }
  }

  .styled-table tbody tr {
    border-bottom: 1px solid #dddddd;
  }
  .styled-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }
  .styled-table tbody tr:last-of-type {
    border-bottom: 2px solid var(--btn);
  }
  .styled-table tbody tr:last-child(0) {
    font-weight: bold;
    color: var(--btn);
  }

  tbody tr:hover {
    background-color: rgba(0, 110, 227, 0.1) !important;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    .styled-table {
      font-size: 0.7em;
    }
    .styled-table th,
    .styled-table td {
      padding: 0.4rem;
    }
  }
`;
