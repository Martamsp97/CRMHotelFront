import { Component, inject, Input } from '@angular/core';
import { HabitacionesService } from '../../../services/habitaciones.service';
import Habitacion, { Details } from '../../../interfaces/habitacion.interface';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-detalle-habitaciones',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detalle-habitaciones.component.html',
  styleUrl: './detalle-habitaciones.component.css'
})
export class DetalleHabitacionesComponent {

  @Input() habitacionId: number = 0;

  habitacionesService = inject(HabitacionesService);

  habitacion: Habitacion | null = null;


  async ngOnInit() {
    try {
      this.habitacion = await this.habitacionesService.getById(this.habitacionId);
      console.log(this.habitacion);
    } catch (error) {
      console.log(error);
    }
  }


}
