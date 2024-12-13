import { Component, inject } from '@angular/core';
import { Reserva } from '../../interfaces/reserva';
import { ReservasService } from '../../services/reservas.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-crm-reservas',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './crm-reservas.component.html',
  styleUrl: './crm-reservas.component.css'
})
export class CrmReservasComponent {

  formulario: FormGroup = new FormGroup({
    fecha_entrada: new FormControl(''),
    fecha_salida: new FormControl('')
  })

  formularioDni: FormGroup = new FormGroup({
    dni: new FormControl('')
  })

  arrrReservas: Reserva[] = []

  reservasService = inject(ReservasService)

  async ngOnInit() {
    try {
      const response = await this.reservasService.getAll()
      this.arrrReservas = response
    } catch (error) {
      console.log(error)

    }
  }

  filtrarFecha() {
    console.log(this.formulario.value.fecha_entrada)
    console.log(this.formulario.value.fecha_salida)

  }

  filtrarDni() {
    console.log(this.formularioDni.value)
  }
}
