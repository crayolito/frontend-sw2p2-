import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LugarViaje, SerachBarAOP1Service, } from './opcion1.service';



@Component({
  selector: 'app-alojamiento-opcion1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './opcion1.component.html',
  styleUrl: './opcion1.component.css'
})
export class AlojamientoOpcion1Component {
  serachBarAOP1Service = inject(SerachBarAOP1Service);
  lugaresViaje: LugarViaje[] = this.serachBarAOP1Service.lugaresViaje;
  valorSeleccionado = this.serachBarAOP1Service.valorSeleccionado;
  selectLugarViaje(lugar: LugarViaje) {
    this.serachBarAOP1Service.seleccionarLugar(lugar);
  }
  resetValor = this.serachBarAOP1Service.resetValor;
}


