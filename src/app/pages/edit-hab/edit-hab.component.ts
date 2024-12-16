import { Component, inject, Input } from '@angular/core';

@Component({
  selector: 'app-edit-hab',
  standalone: true,
  imports: [],
  templateUrl: './edit-hab.component.html',
  styleUrl: './edit-hab.component.css'
})
export class EditHabComponent {
  @Input() idHab: number = 0;

}
