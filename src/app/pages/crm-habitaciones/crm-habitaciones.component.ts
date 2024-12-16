import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import Habitacion from '../../interfaces/habitacion.interface';
import { CrmHabsService } from '../../services/crm-habs.service';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-crm-habitaciones',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './crm-habitaciones.component.html',
  styleUrl: './crm-habitaciones.component.css'
})
export class CrmHabitacionesComponent {

  @Input() habitacion: Habitacion | null = null
  @Output() habitacionBorrada: EventEmitter<Habitacion> = new EventEmitter
  arrHabitaciones: Habitacion[] = []

  crmHabsService = inject(CrmHabsService)

  formulariofecha: FormGroup = new FormGroup({
    fechaentrada: new FormControl(''),
    fechasalida: new FormControl('')
  })

  filtroDni: FormGroup = new FormGroup({
    dni: new FormControl('')
  })

  filtroPlanta: FormGroup = new FormGroup({
    piso: new FormControl('')
  })

  filtrocat: FormGroup = new FormGroup({
    categoria: new FormControl('')
  })

  filtroubi: FormGroup = new FormGroup({
    vista: new FormControl('')
  })


  async ngOnInit() {
    try {
      const response = await this.crmHabsService.getAllHabitaciones()
      this.arrHabitaciones = response
      console.log(this.arrHabitaciones)
    } catch (error) {
      console.log(error)

    }
  }

  /*   async filtrarFecha() {
      try {
        const { fechaentrada, fechasalida } = this.formulariofecha.value;
        const response = await this.crmHabsService.getHabitacionesByFecha(fechaentrada, fechasalida);
        this.arrHabitaciones = response;
      } catch (error) {
        console.log(error)
      }
    } */

  async filtrarPlanta() {
    try {

      const response = await this.crmHabsService.getHabByPiso(this.filtroPlanta.value.piso);
      this.arrHabitaciones = response;
      console.log(this.arrHabitaciones)
    } catch (error) {
      console.log(error)
    }
  }
  async filtrarCategoria() {
    try {
      const categoria = this.filtrocat.value.categoria;
      const response = await this.crmHabsService.getHabByCategoria(categoria);
      this.arrHabitaciones = response;
      console.log(this.arrHabitaciones)
    } catch (error) {
      console.log(error)
    }
  }

  async filtrarUbicacion() {
    try {
      const vista = this.filtroubi.value.vista;

      const response = await this.crmHabsService.getHabByVista(vista);
      this.arrHabitaciones = response;
      console.log(this.arrHabitaciones)
    } catch (error) {
      console.log(error)
    }
  }
  async borrarHab() { //no funciona, revisar
    const result = await Swal.fire({ title: 'Eliminar habitación', text: '¿Estás seguro que quieres eliminar esta habitación? Si le das a aceptar, no podrás deshacer esta acción', icon: 'question', showCancelButton: true, confirmButtonText: 'Sí, quiero eliminarla' });
    if (result.isConfirmed) {
      try {
        if (this.habitacion) {
          this.habitacion = await this.crmHabsService.deleteHabitacion(this.habitacion?.id)
          this.habitacionBorrada.emit(this.habitacion)
          Swal.fire('Eliminar habitación', 'La habitación ha sido eliminado con éxito', 'success')
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
