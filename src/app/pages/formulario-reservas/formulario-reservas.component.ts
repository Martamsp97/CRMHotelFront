import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ReservasService } from '../../services/reservas.service';

@Component({
  selector: 'app-formulario-reservas',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-reservas.component.html',
  styleUrl: './formulario-reservas.component.css'
})
export class FormularioReservasComponent {

  reservasService = inject(ReservasService);



  formulario: FormGroup = new FormGroup({
    fecha_entrada: new FormControl(''),
    fecha_salida: new FormControl(''),
    num_personas: new FormControl(''),
    regimen: new FormControl(''),
    tipo_cancelacion: new FormControl(''),
    aparcamiento: new FormControl(''),
    desayuno: new FormControl(''),
    spa: new FormControl(''),
    gimnasio: new FormControl(''),
    piscina: new FormControl(''),
    metodo_pago: new FormControl(''),
    num_habitaciones: new FormControl('')
  })

  crearReserva() {

  }

  //recordar al insertar en la bbdd la reserva añadirle el id del usuario que la ha hecho y el estado de la reserva, que sería confirmada
  // req.user.id en el back para obtener el id del usuario que ha hecho la reserva

}
