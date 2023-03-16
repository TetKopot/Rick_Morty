import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Search } from './components/Form/Search';
import { Home } from './components/Home/Home';
import { CharacterDetail } from './components/CharacterDetail/CharacterDetail'; 

export const App: React.FC = () => {

  return (
    <Routes>
      <Route path='/' element={<Home />} /> 
      <Route path='/character/:characterId' element={<CharacterDetail />} />
    </Routes>
  );
}