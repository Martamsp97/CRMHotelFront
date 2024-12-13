import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { HomeComponent } from './pages/home/home.component';
<<<<<<< HEAD
import { ListaHabitacionesComponent } from './pages/habitaciones/lista-habitaciones/lista-habitaciones.component';
import { NuevaHabitacionComponent } from './pages/habitaciones/nueva-habitacion/nueva-habitacion.component';

=======
import { HabitacionesComponent } from './pages/habitaciones/habitaciones.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CrmReservasComponent } from './pages/crm-reservas/crm-reservas.component';
import { CrmHabitacionesComponent } from './pages/crm-habitaciones/crm-habitaciones.component';
>>>>>>> feature-dashboard

export const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: "", component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
<<<<<<< HEAD
    { path: 'habitaciones', component: ListaHabitacionesComponent },
    { path: 'crearHabitacion', component: NuevaHabitacionComponent },

=======
    { path: 'habitaciones', component: HabitacionesComponent },
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            { path: 'reservas', component: CrmReservasComponent },
            { path: 'habitaciones', component: CrmHabitacionesComponent }
        ],
    },
>>>>>>> feature-dashboard
    { path: '**', redirectTo: '' }
];
