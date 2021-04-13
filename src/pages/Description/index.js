import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Fascicles from '../../components/Fascicles';
import Header from '../../components/Header';
import Loader from '../../components/Loader';

import { Container } from './styles';

function Description() {
  const { idCharacter } = useParams();
  const refWindow = useRef(null);
  const character = useSelector((state) => {
    return state.Characters.data.results.find((item) => item.id == idCharacter);
  });
  const comics = useSelector((state) => state.Comics.data.results);
  const { loading } = useSelector((state) => state.Comics);

  useEffect(() => {
    if (refWindow.current) {
      refWindow.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [comics]);

  return (
    <Container>
      <Header />
      {loading && <Loader />}

      <div className="container-header" ref={refWindow}>
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
