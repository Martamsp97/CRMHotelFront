import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HabitacionesComponent } from './pages/habitaciones/habitaciones.component';
export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: 'habitaciones', component: HabitacionesComponent }
];
