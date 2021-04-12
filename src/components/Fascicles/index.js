import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import apiRef from '../../Services/api';
import Loader from '../Loader';

import { Container } from './styles';

function Fascicles({ idCharacter }) {
  const credentials = useSelector((state) => state.Credentials);
  const [dataFacicles, setDataFacicle] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const api = apiRef(
      credentials.data.private_Key,
      credentials.data.publicKey
    );
    const data = await api.get(
      `/v1/public/characters/${idCharacter}/comics?orderBy=-modified&limit=10&offset=0&apikey=${credentials.data.publicKey}`
    );
    const response = data?.data?.data?.results ? data.data.data.results : {};
    setDataFacicle(response);
    setLoading(false);
    console.log('comics: ', response);
  }, []);
  return (
    <Container>
      {loading && <Loader />}

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
    </Container>
  );
}

export default Fascicles;
