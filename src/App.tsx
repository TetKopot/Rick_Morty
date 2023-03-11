import React, { useState, useEffect, useMemo } from 'react';
// import { ReactDOM } from 'react';
import { Character } from './types/Character';
import { api } from './api/characters';
import { Header } from './components/Header/Header';
import { Search } from './components/Form/Search';

export const App: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  // api.getCharacters()
  //   .then(setCharacters);
  //   console.log(api)

  useEffect(() => {
    api.getCharacters().then(setCharacters);
  },[]);

  // const visibleCharacters = useMemo(() => {
  //   return api.getCharacters();
  // })

  return (
    <>
      <Header />
      <Search />
    </>
  );
}