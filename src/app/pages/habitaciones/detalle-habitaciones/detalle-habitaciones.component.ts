import { Component, inject, Input } from '@angular/core';
import { HabitacionesService } from '../../../services/habitaciones.service';
import Habitacion from '../../../interfaces/habitacion.interface';

@Component({
  selector: 'app-detalle-habitaciones',
  standalone: true,
  imports: [],
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
