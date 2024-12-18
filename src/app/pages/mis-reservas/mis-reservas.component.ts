import { Component, inject } from '@angular/core';
import { Reserva } from '../../interfaces/reserva';
import { RouterLink } from '@angular/router';
import { ReservasService } from '../../services/reservas.service';

@Component({
  selector: 'app-mis-reservas',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './mis-reservas.component.html',
  styleUrl: './mis-reservas.component.css'
})
export class MisReservasComponent {

  reservasService = inject(ReservasService)

  arrReservas: Reserva[] = []

  async ngOnInit() {
    this.arrReservas = await this.reservasService.getReservasByUser()
    console.log(this.arrReservas)
  }
}
