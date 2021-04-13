import React from 'react';

import Header from '../../components/Header';
import FormCredentials from '../../components/FormCredentials';

import { Container } from './styles';

function Credentials() {
  return (
    <Container>
      <Header hamburger={false} />

      <FormCredentials />
      <div className="myCredentials">
        <p>
          <span>private_key:</span> e2de27b52d51f14f12cd9173cb973404bb4d9228
        </p>
        <p>
          <span>public_key: </span>be9b49f82bdef6b3898a590fa7b2027a
        </p>
      </div>
    </Container>
  );
}

export default Credentials;
