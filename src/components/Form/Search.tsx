import React, { useState } from 'react';
import cn from 'classnames';
import { Character } from '../../types/Character';
import './Search.scss';
import { Result } from '../Result/Result';

export const Search: React.FC = () => {
  const [value, setValue] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const query = params.get("query") || "";

    return query;
  });

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.trim().toLocaleLowerCase();

    setValue(query);

    if (query) {
      window.history.pushState({ query }, "", `?query=${query}`);
    } else {
      window.history.pushState(null, "", "/");
    }
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
