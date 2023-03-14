import React, { useState } from 'react';
import cn from 'classnames';
import { Character } from '../../types/Character';
import './Search.scss';
import { Result } from '../Result/Result';

export const Search: React.FC = () => {
  const [value, setValue] = useState('');

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
  };

  return (
    <>
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

    <Result value={value}/>
    </>
  );
};
