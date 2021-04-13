import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import * as ComicsActions from '../../Store/ducks/Comics/actions';
import PagesButtons from '../PaginationButtons';

import { Container } from './styles';

function Fascicles({ idCharacter }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const credentials = useSelector((state) => state.Credentials);
  const dataFacicles = useSelector((state) => state.Comics.data.results);
  async function getFascicles() {
    if (
      credentials.data.privateKey === '' ||
      credentials.data.publicKey === ''
    ) {
      history.push('/');
      return;
    }
    dispatch(
      ComicsActions.loadHeroesRequest(
        0,
        10,
        '-modified',
        credentials,
        idCharacter,
      ),
    );
  }
  useEffect(() => {
    getFascicles();
  }, []);
  return (
    <Container>
      <h5>Fasículos</h5>
      <hr />
      <div className="content-comics">
        {dataFacicles.map((item) => (
          <>
            <div className="card-comics">
              <img
                src={`${item.thumbnail.path}/portrait_incredible.${item.thumbnail.extension}`}
                alt={`an ilustration of ${item.name}`}
                className="desktop"
              />
              <img
                src={`${item.thumbnail.path}/portrait_xlarge.${item.thumbnail.extension}`}
                alt={`an ilustration of ${item.name}`}
                className="mobile"
              />
              <div className="comics-right">
                <div>
                  <p className="name-comics">{item.title}</p>
                  <p className="name-comics">
                    Número de capa: {item.issueNumber}
                  </p>
                </div>
                <p className="description">
                  {item.description
                    ? item.description
                    : 'No description avaliable!'}
                </p>
              </div>
            </div>
            <hr />
          </>
        ))}
      </div>

      <PagesButtons idCharacter={idCharacter} />
    </Container>
  );
}

export default Fascicles;
