import React from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Search } from '../Form/Search';

export const Home: React.FC = () => {
  const location = useLocation();
  
  return (
    <>
      <Header />
      <Search />
    </>
  );
}