import * as React from 'react';
import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { FaSearchPlus } from 'react-icons/fa';
import { FiChevronsRight, FiChevronsLeft } from 'react-icons/fi';

import * as CharactersActions from '../../Store/ducks/Characters/actions';
import * as ComicsActions from '../../Store/ducks/Comics/actions';

import { Container, Form } from './styles';

const PagesButtons = ({ idCharacter = false }) => {
  const dispatch = useDispatch();
  const dataCredentials = useSelector((state) => state.Credentials);
  let actualPage;
  let totalPages;
  if (!idCharacter) {
    ({ actualPage, totalPages } = useSelector(
      (state) => state.Characters.data
    ));
  } else {
    ({ actualPage, totalPages } = useSelector((state) => state.Comics.data));
  }
  const [searchPage, setSearchPage] = useState(0);
  useEffect(() => {
    setSearchPage(actualPage);
  }, [actualPage]);
  useEffect(() => {
    if (idCharacter) {
      setSearchPage(0);
    }
  }, []);
  function handleNextPage() {
    const offset = actualPage * 10 + 10;
    if (!idCharacter) {
      dispatch(
        CharactersActions.loadHeroesRequest(
          offset,
          10,
          '-modified',
          dataCredentials
        )
      );
    } else {
      dispatch(
        ComicsActions.loadHeroesRequest(
          offset,
          10,
          '-modified',
          dataCredentials,
          idCharacter
        )
      );
    }
  }
  function handlePreviousPage() {
    const offset = actualPage * 10 - 10;
    if (!idCharacter) {
      dispatch(
        CharactersActions.loadHeroesRequest(
          offset,
          10,
          '-modified',
          dataCredentials
        )
      );
    } else {
      dispatch(
        ComicsActions.loadHeroesRequest(
          offset,
          10,
          '-modified',
          dataCredentials,
          idCharacter
        )
      );
    }
  }
  function handleSearchPerPage(event) {
    event.preventDefault();
    const offset = searchPage * 10;
    if (!idCharacter) {
      dispatch(
        CharactersActions.loadHeroesRequest(
          offset,
          10,
          '-modified',
          dataCredentials
        )
      );
    } else {
      dispatch(
        ComicsActions.loadHeroesRequest(
          offset,
          10,
          '-modified',
          dataCredentials,
          idCharacter
        )
      );
    }
  }

  return (
    <Container>
      {actualPage !== 0 && (
        <button type="button" onClick={handlePreviousPage}>
          <FiChevronsLeft color="white" size={20} />
        </button>
      )}
      <Form onSubmit={handleSearchPerPage}>
        <input
          type="number"
          name="page"
          id="page"
          value={searchPage}
          max={totalPages}
          onChange={(event) => setSearchPage(event.target.value)}
        />
        <button type="submit">
          <FaSearchPlus color="white" size={20} />
        </button>
      </Form>
      {actualPage !== totalPages && (
        <button type="button" onClick={() => handleNextPage()}>
          <FiChevronsRight color="white" size={20} />
        </button>
      )}
    </Container>
  );
};

export default PagesButtons;
