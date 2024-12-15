import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import Habitacion from '../interfaces/habitacion.interface';
import { lastValueFrom } from 'rxjs';

type CreateBody = {
  piso: number,
  puerta: number,
  mascotas: number,
  num_camas: string,
  categoria: string,
  precio: number,
  tamanho: string,
  vista: string,
  cocina: number
}

@Injectable({
  providedIn: 'root'
})
export class HabitacionesService {
  private httpClient = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/habitaciones`;

  getAll(): Promise<Habitacion[]> {
    return lastValueFrom(
      this.httpClient.get<Habitacion[]>(this.baseUrl)
    )
  }
  create(body: CreateBody): Promise<Habitacion[]> {
    return lastValueFrom(
      this.httpClient.post<Habitacion[]>(this.baseUrl, body)
    );
  }
  deleteById(empleadoId: string) {
    return lastValueFrom(
      this.httpClient.delete<Habitacion>(`${this.baseUrl}`)
    );
  }
  isAdmin(): boolean {

    {
      return false;
    }
    return true;
  }
}