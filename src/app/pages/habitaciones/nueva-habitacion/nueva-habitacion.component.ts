import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HabitacionesService } from '../../../services/habitaciones.service';
import Swal from 'sweetalert2';
import Habitacion from '../../../interfaces/habitacion.interface';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-nueva-habitacion',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './nueva-habitacion.component.html',
  styleUrl: './nueva-habitacion.component.css'
})

export class NuevaHabitacionComponent {

  router = inject(Router);
  habitacionesService = inject(HabitacionesService);
  selectedServices: { icon: string; label: string }[] = [];
  selectedDetail: { text: string }[] = [];
  form: FormGroup;


  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      categoria: [''],
    });
  }

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


  roomDeluxe = [
    { icon: 'fi fi-rr-screen', label: 'Smart TV' },
    { icon: 'fi fi-bs-wifi', label: 'Wi-Fi' },
    { icon: 'fi fi-rr-mug-hot-alt', label: 'Desayuno Buffet' },
    { icon: 'fi fi-rs-air-conditioner', label: 'Aire acondicionado' },

  ];

  roomPremium = [
    { icon: 'fi fi-rr-screen', label: 'Smart TV' },
    { icon: 'fi fi-bs-wifi', label: 'Wi-Fi' },
    { icon: 'fi fi-rr-mug-hot-alt', label: 'Desayuno Buffet' },

  ];

  roomEstandar = [
    { icon: 'fi fi-rr-screen', label: 'Smart TV' },
    { icon: 'fi fi-bs-wifi', label: 'Wi-Fi' },
  ];


  async onSubmit() {
    try {
      console.log(this.formulario.value);
      const habitacion = await this.habitacionesService.create(this.formulario.value);
      Swal.fire({ title: 'Nuevo Habitacion', text: 'La habitacion se ha creado con éxito', icon: 'success' });
      this.router.navigateByUrl('/dashboard/habitaciones');
    } catch (error) {
      console.log(error);
    }
  }

  onCategoryChange() {
    const selectedCategory = this.form.get('categoria')?.value;

    // Actualizar los servicios seleccionados en base a la categoría
    if (selectedCategory === 'roomDeluxe') {
      this.selectedServices = this.roomDeluxe;
    } else if (selectedCategory === 'roomPremium') {
      this.selectedServices = this.roomPremium;
    } else if (selectedCategory === 'roomEstandar') {
      this.selectedServices = this.roomEstandar;
    } else {
      this.selectedServices = [];
    }
  }


}


