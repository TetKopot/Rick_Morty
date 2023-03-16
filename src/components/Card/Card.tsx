import React, { useEffect, useState } from 'react';
import { ApiResponse, Character, FullCharacter } from '../../types/Character';
import { api } from '../../api/characters';
import './Card.scss';
import { Link } from 'react-router-dom'; 

type Props = {
  character: FullCharacter;
}

export const Card: React.FC<Props> = ({ character }) => {

  return (
   
    <div className="card">
       <Link to={`/character/${character.id}`} style={{ textDecoration: 'none' }}>
        <div className="card__image">
          <img src={character.image} alt="character" />
        </div>

        <div className="card__info">
          <p className='card__info-name'>{character.name}</p>
          <p className='card__info-species'>{character.species}</p>
        </div>
      </Link>
    </div>
  )
}