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
import { DetalleHabitacionesComponent } from './pages/habitaciones/detalle-habitaciones/detalle-habitaciones.component';

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
            { path: '', redirectTo: 'reservas', pathMatch: 'full' },
            { path: 'reservas', component: CrmReservasComponent },
            { path: 'habitaciones', component: CrmHabitacionesComponent },
<<<<<<< HEAD
            { path: '', component: CrmDetalleReservaComponent },
            // { path: 'habitaciones/new', component: NewHabComponent },
            // { path: 'habitaciones/edit/:habId', component: EditHabComponent },
            // { path: 'habitaciones/detalle/:habId', component: DetalleHabcrmComponent }
=======

            { path: 'habitaciones/new', component: NewHabComponent },
            { path: 'habitaciones/edit/:habId', component: EditHabComponent },
            { path: 'habitaciones/detalle/:habId', component: DetalleHabcrmComponent }
>>>>>>> ea7597863f6aba71fe7de1b64e94da468d5b0dd5
        ],
    },
    { path: '**', redirectTo: '' }
];
