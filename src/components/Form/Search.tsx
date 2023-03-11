import React, { useState } from 'react';
import cn from 'classnames';
import { Character } from '../../types/Character';
// import getCharacters from '../../api/characters';
import './Search.scss';

export const Search: React.FC = () => {
  const [value, setValue] = useState('');
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };



  return (
    <div className="search">
      <input 
        type="text" 
        className='search__input'
        placeholder='Filter by name...'
        value={value}
        onChange={handleInput}
      />
      <div className="search__icon"></div>
    </div>
  );
};