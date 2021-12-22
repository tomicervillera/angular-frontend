import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Publicador, Response } from '@app/models/api-models';

@Injectable({
  providedIn: 'root',
})
export class PublicadoresService {
  initialPublicadores: Publicador[] = [
    {
      _id: '61bf9d1c4c6e3106f427425e',
      id: '2',
      nombre: 'Sony Interactive Entertainment',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1uMAXk46k7X0XQFgL0AuwBRP4VGRGe5OVD1UUaDMYEVQ1Yom7DXEi-SeFqVzsG5KCa4E&usqp=CAU',
    },
  ];

  constructor(private http: HttpClient) {
    this.getPublicadores();
  }

  publicadores$: BehaviorSubject<Publicador[]> = new BehaviorSubject(this.initialPublicadores);

  getInitialPublicadores(): Observable<Publicador[]> {
    return this.publicadores$.asObservable();
  }

  getPublicadores() {
    this.http
      .get<Response>(`${environment.baseUrl}publicadores`)
      .pipe(
        map((response) => {
          return response.data;
        })
      )
      .subscribe((data) => {
        this.publicadores$.next((data as Publicador[]).sort((a, b) => a.nombre.localeCompare(b.nombre)));
      });
  }

  getPublicadorById(id: string) {
    return this.http.get<Response>(`${environment.baseUrl}publicadores/${id}`);
  }

  filterPublicadores(text: string) {
    this.http
      .get<Response>(`${environment.baseUrl}publicadores`)
      .pipe(
        map((response) => {
          return response.data;
        })
      )
      .subscribe((data) => {
        this.publicadores$.next((data as Publicador[]).sort((a, b) => a.nombre.localeCompare(b.nombre)));
        const filteredPublicadores = this.publicadores$.value.filter((publicador) =>
          publicador.nombre.toLowerCase().includes(text.toLowerCase())
        );
        this.publicadores$.next(filteredPublicadores);
      });
  }

  resetPublicadores() {
    this.getPublicadores();
  }
}
