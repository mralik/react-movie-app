import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import SideBar from '../../components/SideBar';
import Search from '../../components/SearchBar';
import MoviesGrid from '../../components/Grid';

import Get from '../../api/Get';
import Constants from '../../utils/Constants';
import useSearch from '../../hooks/useSearch';

import {
  RootContainer,
  SideBarSection,
  ContentSection,
  MoviesGridSection,
  SearchBarSection
} from './styled';
import Index from "../../components/Detail";

Constants.FuseOptions.keys = ['title'];

function Main() {
  const [movies, setMovies] = useState({});
  const [movieType, setMovieType] = useState();

  useEffect(() => {
    try {
      (async () => {
        const popularMovies = await Get.movies('now_playing');
        setMovies(state => {
          const newState = { ...state };
          newState.now_playing = popularMovies.data.results;
          return newState;
        });
        setMovieType('now_playing');
      })();
    } catch (e) {
    }
  }, []);

  const fetch = async what => {
    const split = what.split(' ');
    const type = split.reduce((acc, curr, i) => {
      return acc
        .concat(curr.toLowerCase())
        .concat(i !== split.length - 1 ? '_' : '');
    }, '');
    if (!movies[type]) {
      const fetchedMovies = await Get.movies(type);
      setMovies(state => {
        const newState = { ...state };
        newState[type] = fetchedMovies.data.results;
        return newState;
      });
    }
    setMovieType(type);
  };

  const { results, search, searchTerm } = useSearch({
    data: movies[movieType],
    options: Constants.FuseOptions
  });


  return (
    <RootContainer>
      <ContentSection>
        <SearchBarSection>
          <Search handler={e => search(e.target.value)} value={searchTerm} />
        </SearchBarSection>

        <Router>
          <Switch>
            <Route path="/" exact>
              <SideBarSection>
                <SideBar handler={fetch} />
              </SideBarSection>
              <MoviesGridSection>
                <MoviesGrid items={results} />
              </MoviesGridSection>

            </Route>
            <Route path="/detail/:id" render={(props) => <Index {...props} />}>
            </Route>
          </Switch>
        </Router>
      </ContentSection>
    </RootContainer>
  );
}

export default Main;
