import { Routes } from '@angular/router';
import { ListaHabitacionesComponent } from './pages/habitaciones/lista-habitaciones/lista-habitaciones.component';
import { NuevaHabitacionComponent } from './pages/habitaciones/nueva-habitacion/nueva-habitacion.component';

export const routes: Routes = [
    { path: 'habitaciones', component: ListaHabitacionesComponent },
    { path: 'crearHabitacion', component: NuevaHabitacionComponent }
];
