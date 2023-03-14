import React, { useState, useEffect, useMemo } from 'react';
// import { ReactDOM } from 'react';
import { ApiResponse, Character } from './types/Character';
import { Header } from './components/Header/Header';
import { Search } from './components/Form/Search';
import { Result } from './components/Result/Result';

export const App: React.FC = () => {
  // api.getCharacters()
  //   .then(setCharacters);
  //   console.log(api)



  return (
    <>
      <Header />
      <Search />
    </>
  );
}