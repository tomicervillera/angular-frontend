import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Juego, Response } from '@app/models/api-models';

@Injectable({
  providedIn: 'root',
})
export class JuegosService {
  initialJuegos: Juego[] = [
    {
      _id: '61bf9a844c6e3106f42502a7',
      id: '1',
      idPublicador: '1',
      idDesarrollador: '1',
      nombre: 'Mortal Kombat X',
      precio: '150',
      descripcion:
        'Disfruta de la nueva generación de la franquicia de lucha n.º 1. Mortal Kombat X reúne un aspecto cinematográfico y una mecánica de juego nunca vistos.',
      img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/307780/header.jpg?t=1588110604',
      url: 'https://games.crazygames.com/es_ES/mortal-kombat-karnage/index.html',
      genero: 'Pelea',
      fechaPublicacion: new Date('01/01/2021'),
    },
  ];

  constructor(private http: HttpClient) {
    this.getJuegos();
  }

  // filtered: any[] = [];
  // getHeroe(id: number) {
  //   return this.heroes$.value[id];
  // }
  // filterHeroes(text: string) {
  //   this.filtered = this.movies.filter((movie) =>
  //     movie.nombre.toLowerCase().includes(text.toLowerCase())
  //   );
  //   console.log(this.filtered);
  // }

  juego$: BehaviorSubject<Juego> = new BehaviorSubject(this.initialJuegos[0]);
  juegos$: BehaviorSubject<Juego[]> = new BehaviorSubject(this.initialJuegos);

  getInitialJuegos(): Observable<Juego[]> {
    return this.juegos$.asObservable();
  }

  getJuegos() {
    this.http
      .get<Response>(`${environment.baseUrl}juegos`)
      .pipe(
        map((response) => {
          return response.data;
        })
      )
      .subscribe((data) => {
        this.juegos$.next(data as Juego[]);
      });
  }

  getJuegoById(id: string) {
    return this.juegos$.value.find((juego) => (juego._id = id));
  }

  getJuegoById2(id: string) {
    //console.log((`URL DESTINO: ${environment.baseUrl}juegos/${id}`))
    return this.http.get<Response>(`${environment.baseUrl}juegos/${id}`);
  }

  filterJuegos(text: string) {
    const filteredJuegos = this.juegos$.value.filter((juego) =>
      juego.nombre.toLowerCase().includes(text.toLowerCase())
    );
    console.log(text, filteredJuegos);

    this.juegos$.next(filteredJuegos);
  }

  resetJuegos() {
    this.getJuegos();
    // this.heroes$.next(this.initialMovies);
  }
}
