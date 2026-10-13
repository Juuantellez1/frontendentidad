// src/app/services/entidad.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entidad } from '../models/entidad';

@Injectable({
  providedIn: 'root'
})
export class EntidadService {

  private apiUrl = 'http://localhost:8080/api/entidades';

  constructor(private http: HttpClient) {}

  getEntidades(): Observable<Entidad[]> {
    return this.http.get<Entidad[]>(this.apiUrl);
  }

  crearEntidad(entidad: Entidad): Observable<Entidad> {
    return this.http.post<Entidad>(this.apiUrl, entidad);
  }
}
