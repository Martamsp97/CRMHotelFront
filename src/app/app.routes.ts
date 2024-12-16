import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { HomeComponent } from './pages/home/home.component';
import { ListaHabitacionesComponent } from './pages/habitaciones/lista-habitaciones/lista-habitaciones.component';
import { NuevaHabitacionComponent } from './pages/habitaciones/nueva-habitacion/nueva-habitacion.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CrmReservasComponent } from './pages/crm-reservas/crm-reservas.component';
import { CrmHabitacionesComponent } from './pages/crm-habitaciones/crm-habitaciones.component';
import { MainComponent } from './pages/main/main.component';
import { CrmDetalleReservaComponent } from './pages/crm-detalle-reserva/crm-detalle-reserva.component';
<<<<<<< HEAD
import { DetalleHabitacionesComponent } from './pages/habitaciones/detalle-habitaciones/detalle-habitaciones.component';
=======
import { NewHabComponent } from './pages/new-hab/new-hab.component';
import { EditHabComponent } from './pages/edit-hab/edit-hab.component';
import { DetalleHabcrmComponent } from './pages/detalle-habcrm/detalle-habcrm.component';
>>>>>>> dae82a94c3eaa12746e419f2b4b22fab64d91993

export const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            { path: "", component: HomeComponent },
            { path: 'habitaciones', component: ListaHabitacionesComponent },
            { path: 'crearHabitacion', component: NuevaHabitacionComponent },
            { path: 'habitaciones/:habitacionId', component: DetalleHabitacionesComponent }
        ],
    },

    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },

    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            { path: 'reservas', component: CrmReservasComponent },
            { path: 'habitaciones', component: CrmHabitacionesComponent },
            { path: '', component: CrmDetalleReservaComponent },
            { path: 'habitaciones/new', component: NewHabComponent },
            { path: 'habitaciones/edit/:habId', component: EditHabComponent },
            { path: 'habitaciones/detalle/:habId', component: DetalleHabcrmComponent }
        ],
    },
    { path: '**', redirectTo: '' }
];
