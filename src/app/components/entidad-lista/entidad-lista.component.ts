import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Entidad } from '../../models/entidad';
import { EntidadService } from '../../services/entidad.service';
import { EntidadFormComponent } from './entidad-form.component';

@Component({
  selector: 'app-entidad-lista',
  standalone: true,
  imports: [CommonModule, EntidadFormComponent],
  templateUrl: './entidad-lista.component.html',
  styleUrls: ['./entidad-lista.component.css']
})
export class EntidadListaComponent implements OnInit {

  entidades: Entidad[] = [];

  constructor(private entidadService: EntidadService) {}

  ngOnInit(): void {
    this.cargarEntidades();
  }

  cargarEntidades(): void {
    this.entidadService.getEntidades().subscribe({
      next: (data: Entidad[]) => this.entidades = data,
      error: (err: any) => console.error('Error cargando entidades', err)
    });
  }

  // se llama cuando el formulario avisa que guardó algo
  refrescarLista(): void {
    this.cargarEntidades();
  }
}
