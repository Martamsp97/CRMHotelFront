import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  reserva: FormGroup = new FormGroup(
    {
      llegada: new FormControl(),
      salida: new FormControl(),
      num_personas: new FormControl(),
    })


  onSubmit() { }
}
