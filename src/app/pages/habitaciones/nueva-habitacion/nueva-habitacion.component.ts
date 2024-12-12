import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nueva-habitacion',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './nueva-habitacion.component.html',
  styleUrl: './nueva-habitacion.component.css'
})
export class NuevaHabitacionComponent {

  router = inject(Router);

  formulario: FormGroup = new FormGroup({
    piso: new FormControl(1),
    puerta: new FormControl(101),
    mascotas: new FormControl(2),
    num_camas: new FormControl('Doble'),
    categoria: new FormControl('Deluxe'),
    precio: new FormControl(1230),
    tamanho: new FormControl('Grande'),
    vista: new FormControl('Exterior'),
    cocina: new FormControl(1)
  });

  async onSubmit() {
    try {
    } catch (error) {
      console.log(error);
    }
  }

}
