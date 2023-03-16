import React, { useEffect, useState } from 'react';
import { Card } from '../Card/Card';
import './Result.scss';
import { ApiResponse, Character, FullCharacter } from '../../types/Character';
import { api } from '../../api/characters';

type Props = {
  value: string;
}

export const Result: React.FC<Props> = ({ value }) => {
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
  const visibleSortedCharacters = sortedCharacters.filter((item) => {
    const title = item.name.toLocaleLowerCase();
    const part = value
      .toLocaleLowerCase()
      .trim()
      .split(' ')
      .filter(Boolean)
      .join(' ');

    return title.includes(part);
  })
  
  return (
    <div className="result">
      {visibleSortedCharacters.map((character => (
        <Card key={character.id} character={character} />
      )))}
    </div>
  )
}