import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, retry, filter } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Heroe, Response } from '@app/models/api-models';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  initialMovies: Heroe[] = [
    {
      _id: '61968dc575e87a4dcd5bfa6d',
      id: '1',
      nombre: 'Aquaman',
      bio: 'El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.',
      img: 'https://drive.google.com/uc?export=view&id=1L-MpKd-T-uSvm061ILhsESS391l1G-58',
      casa: 'DC',
    },
    {
      _id: '61968dc575e87a4dcd5bfa6f',
      id: '3',
      nombre: 'Daredevil',
      bio: 'Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede "ver" a través de un "sexto sentido" que le sirve como un radar similar al de los murciélagos.',
      img: 'https://drive.google.com/uc?export=view&id=1cfX3smA_DdgUEyfe915WfBO3OPvueYVp',
      casa: 'Marvel',
    },
    {
      _id: '61968dc575e87a4dcd5bfa70',
      id: '4',
      nombre: 'Hulk',
      bio: 'Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).',
      img: 'https://drive.google.com/uc?export=view&id=10Q9WIzJ1tTkHEvsHFLxDT-oGbnpXPGH2',
      casa: 'Marvel',
    },
    {
      _id: '61968dc575e87a4dcd5bfa71',
      id: '5',
      nombre: 'Linterna Verde',
      bio: 'Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)',
      img: 'https://drive.google.com/uc?export=view&id=1C4NJgk1xvdg9Tz-07Te1Ai7PZElBt-jq',
      casa: 'DC',
    },
  ];

  constructor(private http: HttpClient) {
    this.getCharacters();
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

  heroes$: BehaviorSubject<Heroe[]> = new BehaviorSubject(this.initialMovies);

  getHeroes(): Observable<Heroe[]> {
    return this.heroes$.asObservable();
  }

  getCharacters() {
    this.http
      .get<Response>(`${environment.baseUrl}personajes`)
      .pipe(
        map((response) => {
          // console.log('map', response);
          return response.data;
        })
        // filter((heroe) => )
        // retry(2)
      )
      .subscribe((data) => {
        // console.log('subscribe', data);
        this.heroes$.next(data as Heroe[]);
      });
  }

  filterHeroes(text: string) {
    const filteredMovies = this.heroes$.value.filter((movie) =>
      movie.nombre.toLowerCase().includes(text.toLowerCase())
    );
    console.log(text, filteredMovies);

    this.heroes$.next(filteredMovies);
  }

  resetHeroes() {
    this.getCharacters();
    // this.heroes$.next(this.initialMovies);
  }
}
