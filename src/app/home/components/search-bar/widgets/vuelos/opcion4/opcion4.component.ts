import { Component, inject } from '@angular/core';
import { SerachBarVOP4Service } from './opcion4.service';

@Component({
  selector: 'app-vuelo-opcion4',
  standalone: true,
  imports: [],
  templateUrl: './opcion4.component.html',
  styleUrl: './opcion4.component.css'
})
export class VueloOpcion4Component {
  serachBarVOP4Service = inject(SerachBarVOP4Service);
  valorSeleccionado = this.serachBarVOP4Service.valorSeleccionado;

  categoriaViaje: string[] = [
    "Turista",
    "Turista Superior",
    "Business",
    "Primera",
  ];

  seleccionarCategoriaViaje(categoria: string) {
    this.serachBarVOP4Service.seleccionarCategoriaViaje(categoria);
  }

}
