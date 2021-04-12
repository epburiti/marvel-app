import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import apiRef from '../../Services/api';

import { Container } from './styles';

function Description() {
  const { idCharacter } = useParams();
  const history = useHistory();
  const credentials = useSelector((state) => state.Credentials);
  const character = useSelector((state) => {
    return state.Characters.data.results.find((item) => item.id == idCharacter)
  });
  useEffect(() => {
    if (
      credentials.data.private_key === '' &&
      credentials.data.public_key === ''
    ) {
      history.push('/');
    }
  }, [credentials]);

  useEffect(async () => {
    // const api = apiRef(credentials.data.private_key, credentials.data.public_key);
    // const data = await api.get(`/v1/public/characters/${idCharacter}?apikey=${credentials.data.public_key}`);
    // const [response] = data?.data?.data?.results ? data.data.data.results : {};
    // setDataCharacter(response);
    console.log(character);
    console.log(idCharacter);
  }, []);

  return (
    <Container>
      <div className='container-header'>
        <img
          src={`${character.thumbnail.path}/landscape_amazing.${character.thumbnail.extension}`}
          alt={`${character.name} image of character`}
        />
      </div>

      <h1> descrição</h1>
    </Container>
  );
}

export default Description;
