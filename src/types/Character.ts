export interface Character {
  id: number;
  name: string;
  species: string;

}

export interface FullCharacter {
  id?: number;
  name: string;
  species: string;
  status?: string;
  type?: string;
  gender?: string;
  image: string;
  url?: string;
  origin: {
    name: string;
    url: string;
  }
}

export interface ApiResponse {
  results: FullCharacter[];
}