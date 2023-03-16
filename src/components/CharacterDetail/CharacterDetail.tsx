import React, { useEffect, useState } from 'react';
import { api } from '../../api/characters';
import './CharacterDetail.scss';
import arrow from '../../assets/arrow.png';
import { FullCharacter } from '../../types/Character';
import { useLocation, useParams, useNavigate } from 'react-router-dom';

export const CharacterDetail = () => {
  const [character, setCharacter] = useState<FullCharacter>();
  const { characterId } = useParams();
  const location = useLocation();
  const currentUrl = location.pathname + location.search + location.hash;
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  useEffect (() => {
    api.getCharacter(characterId)
      .then((item) => {
        setCharacter(() => item);
        console.log(characterId);
      })
  }, [characterId]);
  
  return (
    <>
      <div className="goBack">
        <button
          type='submit'
          className='goBack-button'
          onClick={handleGoBack}
        >
          <img 
            src={arrow} 
            alt="back" 
            className='goBack-icon'
          /> 
        </button>
      </div>

      <div className='character'>
      {character && (
        <>
          <div className='character__image'>
            <img src={character.image} alt="character" />
          </div>

          <div className="character__info">
            <div className="character__info-name">
              {character.name}
            </div>
            
            <div className="character__info-title">
              {`informations`}
            </div>
          </div>

          <div className="character__data">
            <div className="character__data-gender">
              <span className="character__data-label">Gender </span>
              <span className="character__data-value">{character.gender}</span>
            </div>

            <div className="character__data-status">
              <span className="character__data-label">Status </span>
              <span className="character__data-value">{character.status}</span>
            </div>

            <div className="character__data-species">
              <span className="character__data-label">Specie </span>
              <span className="character__data-value">{character.species}</span>
            </div>

            <div className="character__data-origin">
              <span className="character__data-label">Origin </span>
              <span className="character__data-value">{character.origin.name}</span>
            </div>

            <div className="character__data-type">
              <span className="character__data-label">Type </span>
              <span className="character__data-value">
                {character.type !== ''
                  ? `${character.type}`
                  : 'Unknown'}
              </span>
            </div>
          </div>
        </>
      )}
    </div>
    </>
    
  );
}