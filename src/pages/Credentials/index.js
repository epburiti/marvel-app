import React from 'react';

import Header from '../../components/Header';
import FormCredentials from '../../components/FormCredentials';

import { Container } from './styles';

function Credentials() {
  return (
    <Container>
      <Header />

      <FormCredentials />
      <div className="myCredentials">
        <p>
          <span>private_key:</span> d4c375f371a41d89750039c1c513cb7ecedfccf0
        </p>
        <p>
          <span>public_key: </span>7debee90ca219cdc3961194be7f34950
        </p>
      </div>
    </Container>
  );
}

export default Credentials;
