import { Component, inject, Input } from '@angular/core';
import { Reserva } from '../../interfaces/reserva';
import { ReservasService } from '../../services/reservas.service';

@Component({
  selector: 'app-crm-detalle-reserva',
  standalone: true,
  imports: [],
  templateUrl: './crm-detalle-reserva.component.html',
  styleUrl: './crm-detalle-reserva.component.css'
})
export class CrmDetalleReservaComponent {

  reserva: Reserva | null = null

  @Input() id: number = 0

  reservasService = inject(ReservasService)

  async ngOnInit() {
    try {
      this.reserva = await this.reservasService.filterById(this.id)
      console.log(this.reserva)
    } catch (error) {
      console.log(error)
    }
  }


  editarReserva() { }

  cancelarReserva() { }

}
