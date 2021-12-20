import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Usuario } from '@app/models/api-models';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(nombreUsuario: string, contraseña: string) {
    return this.http.post<Response>(`${environment.baseUrl}login/`, {nombreUsuario: nombreUsuario, contraseña: contraseña});
  }
}