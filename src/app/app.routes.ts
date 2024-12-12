import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { HomeComponent } from './pages/home/home.component';
import { ListaHabitacionesComponent } from './pages/habitaciones/lista-habitaciones/lista-habitaciones.component';
import { NuevaHabitacionComponent } from './pages/habitaciones/nueva-habitacion/nueva-habitacion.component';


export const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: "", component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'habitaciones', component: ListaHabitacionesComponent },
    { path: 'crearHabitacion', component: NuevaHabitacionComponent },

    { path: '**', redirectTo: '' }
];
