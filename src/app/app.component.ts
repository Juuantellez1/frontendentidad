import { Component } from '@angular/core';
import { EntidadListaComponent } from './components/entidad-lista/entidad-lista.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EntidadListaComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontendentidad';
}
