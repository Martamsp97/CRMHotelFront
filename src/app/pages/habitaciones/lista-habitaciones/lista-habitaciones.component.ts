import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { HabitacionesService } from '../../../services/habitaciones.service';
import Habitacion from '../../../interfaces/habitacion.interface';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-habitaciones',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './lista-habitaciones.component.html',
  styleUrl: './lista-habitaciones.component.css'
})
export class ListaHabitacionesComponent {

  habitacionesService = inject(HabitacionesService);
  arrHabitaciones: Habitacion[] = [];

  @Input({ required: true }) habitacion: Habitacion | null = null;
  @Output() habitacionBorrada: EventEmitter<any> = new EventEmitter();

  async ngOnInit() {
    try {
      this.arrHabitaciones = await this.habitacionesService.getAll();
      console.log(this.arrHabitaciones);

    } catch (error) {
      console.log(error);
    }
  }


  /*   async onClick() {
      const result = await Swal.fire({ title: 'Borrado', text: '¿Quieres borrar la habitación?', icon: 'question', showCancelButton: true, confirmButtonText: 'Sí, ¡Bórralo!' });
      if (result.isConfirmed) {
        try {
          const response = await this.habitacionesService.deleteById(this.habitacion!.id);
          Swal.fire('Borrado', 'Se ha borrado el empleado', 'success');
          this.habitacionBorrada.emit();
        } catch (error) {
          console.log(error);
        }
      }
    } */
}
