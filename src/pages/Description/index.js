import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import Fascicles from '../../components/Fascicles';
import Header from '../../components/Header';

import { Container } from './styles';

function Description() {
  const { idCharacter } = useParams();
  const history = useHistory();
  const credentials = useSelector((state) => state.Credentials);
  const character = useSelector((state) => {
    return state.Characters.data.results.find((item) => item.id == idCharacter);
  });
  useEffect(() => {
    if (
      credentials.data.privateKey === '' ||
      credentials.data.publicKey === ''
    ) {
      history.push('/');
    }
  }, []);

  return (
    <Container>
      <Header />
      <div className="container-header">
        <img
          src={`${character.thumbnail.path}/portrait_incredible.${character.thumbnail.extension}`}
          alt={`an ilustration of ${character.name}`}
          className="desktop"
        />
        <img
          src={`${character.thumbnail.path}/portrait_xlarge.${character.thumbnail.extension}`}
          alt={`an ilustration of ${character.name}`}
          className="mobile"
        />
        <div className="header-right">
          <p className="name-header">{character.name}</p>
          <p className="description">
            {character.description
              ? character.description
              : 'No description avaliable!'}
          </p>
        </div>
      </div>
      <Fascicles idCharacter={idCharacter} />
    </Container>
  );
}

export default Description;
