import { Component } from '@angular/core';
import { Reserva } from '../../interfaces/reserva';

@Component({
  selector: 'app-crm-detalle-reserva',
  standalone: true,
  imports: [],
  templateUrl: './crm-detalle-reserva.component.html',
  styleUrl: './crm-detalle-reserva.component.css'
})
export class CrmDetalleReservaComponent {

  reserva: Reserva | null = null

}
