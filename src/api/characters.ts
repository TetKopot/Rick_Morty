import { Character } from "../types/Character";
import { client } from "../utils/fetchClient";

const getCharacters = () => {
  return client.get<Character[]>('/character');
}

export const api = {
  getCharacters,
}