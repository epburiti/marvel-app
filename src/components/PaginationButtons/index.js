import * as React from 'react';
import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { FaSearchPlus } from "react-icons/fa";
// import {
//   charactersLoadUpdated,
//   charactersComicsLoadUpdated,
// } from '../../store/modules/characters/actions';
import * as CharactersActions from "./../../store/ducks/Characters/actions";
import { Container, Form } from './styles';


const PagesButtons = () => {
  const dispatch = useDispatch();
  const dataCredentials = useSelector(state => state.Credentials);
  const { actual_page, total_pages } = useSelector(state => state.Characters.data);
  const [searchPage, setSearchPage] = useState(0);
  useEffect(() => {
    setSearchPage(actual_page);
  }, [actual_page]);
  function handleNextPage() {
    const offset = actual_page * 10 + 10;
    dispatch(CharactersActions.loadHeroesRequest(offset, 10, '-modified', dataCredentials))
  }
  function handlePreviousPage() {
    const offset = actual_page * 10 - 10;
    dispatch(CharactersActions.loadHeroesRequest(offset, 10, '-modified', dataCredentials))
  }
  function handleSearchPerPage(event) {
    event.preventDefault();
    const offset = searchPage * 10;
    dispatch(CharactersActions.loadHeroesRequest(offset, 10, '-modified', dataCredentials))
  }

  return (
    <Container>
      {actual_page !== 0 &&
        <button type="button" onClick={handlePreviousPage}>
          Anterior
       </button>

      }
      <Form onSubmit={handleSearchPerPage}>
        <input
          type="number"
          name="page"
          id="page"
          value={searchPage}
          max={total_pages}
          onChange={event => setSearchPage(event.target.value)}
        />
        <button type="submit"><FaSearchPlus color={"white"} size={20} /></button>
      </Form>
      {actual_page !== total_pages &&
        <button type="button" onClick={() => handleNextPage()}>
          Próximo
      </button>
      }
    </Container>
  );
};

export default PagesButtons;