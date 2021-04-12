import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Loader from '../../components/Loader';
import PaginationButtons from '../../components/PaginationButtons';
import Header from '../../components/Header';

import { Container } from './styles';

function Home() {
  const history = useHistory();
  const characters = useSelector((state) => state.Characters.data.results);
  const { loading } = useSelector((state) => state.Characters);

  const dataCredentials = useSelector((state) => state.Credentials);
  useEffect(() => {
    if (
      dataCredentials.data.private_Key === '' &&
      dataCredentials.data.publicKey === ''
    ) {
      history.push('/');
    }
  }, [dataCredentials]);

  return (
    <Container>
      <Header />
      {loading && <Loader />}
      <table className="styled-table">
        <thead>
          <tr>
            <th> </th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Última atualização</th>
          </tr>
        </thead>
        <tbody>
          {characters?.map((item) => (
            <tr
              key={item.id}
              onClick={() => {
                history.push({
                  pathname: `description/${item.id}`,
                });
              }}
            >
              <td>
                <img
                  src={`${item.thumbnail.path}/landscape_amazing.${item.thumbnail.extension}`}
                  alt={`ilustration of ${item.name}`}
                />
              </td>
              <td>{item.name}</td>
              <td className="description">
                {item.description.substr(0, 40)
                  ? `${item.description.substr(0, 40)}...`
                  : 'No description found!'}
              </td>
              <td>{new Date(item.modified).toLocaleDateString('pt-br')}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <PaginationButtons />
    </Container>
  );
}

export default Home;
