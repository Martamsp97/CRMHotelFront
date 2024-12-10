import { DOCUMENT } from '@angular/common';
import { Component, Inject, inject } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.document.body.classList.add('fondo-login');
  }

}
