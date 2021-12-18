export interface Response {
  data: Heroe[] | Movie[];
  error: boolean;
}

export interface Heroe {
  _id: string;
  id?: string;
  nombre: string;
  bio: string;
  img: string;
  aparicion?: Date;
  casa: string;
  __v?: number;
}

export interface Movie {
  _id: string;
  id?: string;
  idPersonaje: string;
  nombrePelicula: string;
  descripcion: string;
  __v?: number;
}
