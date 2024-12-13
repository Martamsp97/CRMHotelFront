import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import Habitacion from '../interfaces/habitacion.interface';

type createHab = {
  piso: number;
  puerta: number;
  mascotas: number;
  num_camas: string;
  categoria: string;
  precio: number;
  tamanho: string;
  vista: string;
  cocina: number;
};

@Injectable({
  providedIn: 'root'
})
export class CrmHabsService {
  private httpClient = inject(HttpClient);
  private baseUrl: string = `${environment.apiUrl}/habitaciones`;

  getAllHabitaciones(): Promise<Habitacion[]> {
    return lastValueFrom(
      this.httpClient.get<Habitacion[]>(`${this.baseUrl}`)
    )
  }
  getHabById(habId: number): Promise<Habitacion> {
    return lastValueFrom(
      this.httpClient.get<Habitacion>(`${this.baseUrl}/${habId}`)
    )
  }


  createHabitacion(body: createHab): Promise<Habitacion> {
    return lastValueFrom(
      this.httpClient.post<Habitacion>(`${this.baseUrl}`, body)
    )

  }
  updateHabitacion(empleadoId: string, body: createHab): Promise<Habitacion> {
    return lastValueFrom(
      this.httpClient.put<Habitacion>(`${this.baseUrl}/${empleadoId}`, body)
    )
  }
  deleteHabitacion(habId: number): Promise<Habitacion> {
    return lastValueFrom(
      this.httpClient.delete<Habitacion>(`${this.baseUrl}/${habId}`)
    )
  }
}
