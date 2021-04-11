import React, { useState } from 'react';

import { Container, Input } from './styles';

function FormCredentials() {
  function handleCredentials() {

  }
  const [privateKey, setPrivateKey] = useState("");
  const [publickey, setPublickey] = useState("");
  return (
    <Container>
      <h5>Dados de Acesso</h5>
      <form onSubmit={handleCredentials} data-testid="credentials-form">
        <div>
          <label htmlFor="private_key"></label>
          <Input type="text"
            placeholder="private_key" value={privateKey} onChange={e => {
              setPrivateKey(e.target.value)
            }} />
        </div>
        <div>
          <label htmlFor="public_key"></label>
          <Input type="text"
            placeholder="public_key" value={publickey} onChange={e => {
              setPublickey(e.target.value)
            }} />
        </div>
        <button type="submit">Acessar</button>
      </form>
    </Container>
  );
}

export default FormCredentials;