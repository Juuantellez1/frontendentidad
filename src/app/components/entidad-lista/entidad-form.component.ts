import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Entidad } from '../../models/entidad';
import { EntidadService } from '../../services/entidad.service';

@Component({
  selector: 'app-entidad-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './entidad-form.component.html',
  styleUrls: ['./entidad-form.component.css']
})
export class EntidadFormComponent {

  entidad: Entidad = { nit: '', nombre: '' };

  @Output() guardada = new EventEmitter<void>();

  constructor(private entidadService: EntidadService) {}

  guardar() {
    this.entidadService.crearEntidad(this.entidad).subscribe({
      next: () => {
        this.entidad = { nit: '', nombre: '' };  // limpiar formulario
        this.guardada.emit();                    // avisar al padre
      },
      error: (err: any) => console.error('Error guardando entidad', err)
    });
  }
}
