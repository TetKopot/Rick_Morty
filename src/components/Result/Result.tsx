import React, { useEffect, useState } from 'react';
import { Card } from '../Card/Card';
import './Result.scss';
import { ApiResponse, Character, FullCharacter } from '../../types/Character';
import { api } from '../../api/characters';


export const Result: React.FC = () => {
  const [characters, setCharacters] = useState<FullCharacter[]>([]);

  useEffect(() => {
    // @ts-ignore
    api.getFullCharacters().then((data: ApiResponse) => {
      setCharacters(data.results);
    });
  },[]);

  function sortByName () {
    const sortedCharacters = [...characters];
    return sortedCharacters.sort((a, b) => a.name.localeCompare(b.name));
  }

  const sortedCharacters = sortByName();
  
  return (
    <div className="result">
      {sortedCharacters.map((character => (
        <Card key={character.id} character={character} />
      )))}
    </div>
  )
}