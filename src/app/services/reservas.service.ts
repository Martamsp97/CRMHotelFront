import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Reserva } from '../interfaces/reserva';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  private httpClient = inject(HttpClient);

  private url: string = `${environment.apiUrl}/reservas`;


  getAll(): Promise<Reserva[]> {
    return lastValueFrom(
      this.httpClient.get<Reserva[]>(`${this.url}`))
  }

  filterByFechas(fechaInicio: Date, fechaFin: Date): Promise<Reserva[]> {
    return lastValueFrom(
      this.httpClient.get<Reserva[]>(`${this.url}/fecha/${fechaInicio}/${fechaFin}`))
  }

  filterByDni(dni: string): Promise<Reserva[]> {
    return lastValueFrom(
      this.httpClient.get<Reserva[]>(`${this.url}/dni/${dni}`))
  }

  filterById(id: number): Promise<Reserva> {
    return lastValueFrom(
      this.httpClient.get<Reserva>(`${this.url}/${id}`))
  }
}
