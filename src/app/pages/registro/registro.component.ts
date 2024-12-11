import { DOCUMENT } from '@angular/common';
import { Component, inject, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  constructor(@Inject(DOCUMENT) private document: Document) { }

  UsuariosServie = inject(UsuariosService)
  router = inject(Router)

  formulario: FormGroup = new FormGroup({
    nombre: new FormControl(''),
    apellidos: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    dni: new FormControl(''),
    telefono: new FormControl(''),
    ciudad: new FormControl(''),
    pais: new FormControl(''),
    cod_postal: new FormControl(''),
    fecha_nacimiento: new FormControl(''),
    direccion: new FormControl('')
  });


  ngOnInit() {
    this.document.body.classList.add('fondo-login');

  }

  async onSubmit() {
    console.log('ENTRA')
    try {
      const response = await this.UsuariosServie.registro(this.formulario.value)
      console.log(response)
      /* alertoncio del sweetalert */
      this.router.navigateByUrl('/login')
    } catch (error) {
      /* alert */
      console.log(error)
    }


  }


}
