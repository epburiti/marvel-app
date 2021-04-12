import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { setCredentials } from '../../Store/ducks/Credentials/actions';
import * as CharactersActions from '../../store/ducks/Characters/actions';
import { Container, Input } from './styles';

function FormCredentials() {
  const dataCredentials = useSelector((state) => state.Credentials);
  const history = useHistory();
  const dispatch = useDispatch();
  function handleCredentials(event) {
    event.preventDefault();
    dispatch(setCredentials(privateKey, publickey));
  }
  useEffect(() => {
    if (
      dataCredentials.data.private_Key !== '' &&
      dataCredentials.data.publicKey !== ''
    ) {
      dispatch(
        CharactersActions.loadHeroesRequest(0, 10, '-modified', dataCredentials)
      );
      history.push('/Home');
    }
  }, [dataCredentials]);

  const [privateKey, setPrivateKey] = useState(
    'd4c375f371a41d89750039c1c513cb7ecedfccf0'
  );
  const [publickey, setPublickey] = useState(
    '7debee90ca219cdc3961194be7f34950'
  );
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
            placeholder="publicKey"
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
