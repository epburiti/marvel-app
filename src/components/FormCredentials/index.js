import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { setCredentials } from '../../Store/ducks/Credentials/actions';
import { Container, Input } from './styles';

function FormCredentials() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [privateKey, setPrivateKey] = useState(
    'e2de27b52d51f14f12cd9173cb973404bb4d9228',
  );
  const [publickey, setPublickey] = useState(
    'be9b49f82bdef6b3898a590fa7b2027a',
  );
  function handleCredentials(event) {
    event.preventDefault();
    dispatch(setCredentials(privateKey, publickey));

    history.push('/Home');
  }
  return (
    <Container>
      <h5>Dados de Acesso</h5>
      <form data-testid="credentials-form" onSubmit={handleCredentials}>
        <div>
          <label htmlFor="private_Key" />
          <Input
            type="text"
            placeholder="private_Key"
            value={privateKey}
            onChange={(e) => {
              setPrivateKey(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="publicKey" />
          <Input
            type="text"
            placeholder="public_Key"
            value={publickey}
            onChange={(e) => {
              setPublickey(e.target.value);
            }}
          />
        </div>
        <button type="submit">Acessar</button>
      </form>
    </Container>
  );
}

export default FormCredentials;
