export interface Response {
  data: Heroe[] | Movie[] | Juego[] | Juego;
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

export interface Juego {
  _id:              string;
  id:               string;
  idPublicador:     string;
  idDesarrollador:  string;
  nombre:           string;
  precio:           string;
  descripcion:      string;
  img:              string;
  url:              string;
  género:           string;
  fechaPublicacion: Date;
}
