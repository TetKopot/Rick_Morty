import React, { useEffect, useState } from 'react';
import { ApiResponse, Character, FullCharacter } from '../../types/Character';
import { api } from '../../api/characters';
import './Card.scss';

type Props = {
  character: FullCharacter;
}

export const Card: React.FC<Props> = ({ character }) => {

  return (
    <div className="card">
      <div className="card__image">
        <img src={character.image} alt="character" />
      </div>

      <div className="card__info">
        <p className='card__info-name'>{character.name}</p>
        <p className='card__info-species'>{character.species}</p>
      </div>
    </div>
  )
}