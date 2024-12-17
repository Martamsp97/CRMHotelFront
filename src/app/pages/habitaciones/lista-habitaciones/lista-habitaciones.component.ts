import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { HabitacionesService } from '../../../services/habitaciones.service';
import Habitacion, { Features } from '../../../interfaces/habitacion.interface';
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

  arrDetalles = [];


  arrServicios = [
    { icon: 'fi fi-rr-screen', label: 'Smart TV' },
    { icon: 'fi fi-bs-wifi', label: 'Wi-Fi' },
    { icon: 'fi fi-rr-mug-hot-alt', label: 'Desayuno Buffet' },
    { icon: 'fi fi-rs-air-conditioner', label: 'Aire acondicionado' }
  ];
  roomDeluxeDetail = [
    { text: 'Esta espectacular Habitación de 400 m² hace gala de una elegante combinación de arte, diseño y tecnología. El espacio se distribuye en un amplio salón y un comedor para disfrutar de una mayor privacidad. Además, la suite cuenta con una pequeña cocina y una cómoda zona de trabajo. Relájese en el maravilloso dormitorio con su gran vestidor o en el lujoso baño. La terraza de 220 m² permite celebrar eventos privados y los grandes ventanales llenan la sala de luz natural.' }
  ];

  roomPremiumDetail = [
    { text: 'Alójese en esta habitación de 33 m², la preferida de nuestros huéspedes. Conéctese a nuestro wifi de alta velocidad tomando un Nespresso recién hecho. Elija si prefiere balcón o terraza con vistas y el tipo de cama, según la disponibilidad. Existen habitaciones adaptadas para personas con movilidad reducida.' }
  ];
  roomEstandarDetail = [
    { text: 'Esta habitación de estilo clásico es ideal para cualquier tipo de estancia y ofrece el máximo nivel de confort en el corazón de la ciudad. Los servicios que ofrece garantizan una experiencia de lo más agradable: Conexión con wifi de alta velocidad y servicio de té y café dentro de la habitación. Elija el tipo de cama que prefiera, según la disponibilidad.' }
  ];

  //selectDetail



  async ngOnInit() {
    try {
      this.arrHabitaciones = await this.habitacionesService.getAll();
      console.log(this.arrHabitaciones);

    } catch (error) {
      console.log(error);
    }
  }


<<<<<<< HEAD
  selectedFeature: { icon: string; label: string } | null = null;
  selectedDetail: { text: string } | null = null;

  selectIcons(feature: { icon: string; label: string }) {
    this.selectedFeature = feature;
  }

  selectedInfo: { icon: string; label: string } | null = null;
  selectDetail(feature: { text: string }) {
    this.selectedDetail = feature;
  }
=======
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
>>>>>>> feature-detallereservas
}

