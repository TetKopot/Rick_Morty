import { Character, FullCharacter } from "../types/Character";
import { client } from "../utils/fetchClient";

const getCharacters = () => {
  return client.get<Character[]>('/character');
}

const getCharacter = (characterId: string | undefined) => {
  return client.get<FullCharacter>(`/character/${characterId}`);
}

const getFullCharacters = () => {
  return client.get<FullCharacter[]>('/character');
}

export const api = {
  getCharacters,
  getFullCharacters,
  getCharacter,
}