import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Desarrollador, Response } from '@app/models/api-models';

@Injectable({
  providedIn: 'root',
})
export class DesarrolladoresService {
  initialDesarrolladores: Desarrollador[] = [
    {
      _id: '61bf9c284c6e3106f4266e01',
      id: '1',
      nombre: 'NetherRealm Studios',
      img: 'https://pbs.twimg.com/profile_images/1146567930068340737/rA-xOReQ_400x400.jpg',
    },
  ];

  constructor(private http: HttpClient) {
    this.getDesarrolladores();
  }

  desarrolladores$: BehaviorSubject<Desarrollador[]> = new BehaviorSubject(this.initialDesarrolladores);

  getInitialDesarrolladores(): Observable<Desarrollador[]> {
    return this.desarrolladores$.asObservable();
  }

  getDesarrolladores() {
    this.http
      .get<Response>(`${environment.baseUrl}desarrolladores`)
      .pipe(
        map((response) => {
          return response.data;
        })
      )
      .subscribe((data) => {
        this.desarrolladores$.next(data as Desarrollador[]);
      });
  }

  getDesarrolladorById(id: string) {
    return this.http.get<Response>(`${environment.baseUrl}desarrolladores/${id}`);
  }

  filterDesarrolladores(text: string) {
    const filteredDesarrolladores = this.desarrolladores$.value.filter((desarrollador) =>
      desarrollador.nombre.toLowerCase().includes(text.toLowerCase())
    );
    console.log(text, filteredDesarrolladores);

    this.desarrolladores$.next(filteredDesarrolladores);
  }

  resetDesarrolladores() {
    this.getDesarrolladores();
  }
}
