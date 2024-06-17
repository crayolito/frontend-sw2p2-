import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SerachBarAOP2Service, } from './opcion2.service';

@Component({
  selector: 'app-alojamiento-opcion2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './opcion2.component.html',
  styleUrl: './opcion2.component.css'
})
export class AlojamientoOpcion2Component {
  serachBarAOP2Service = inject(SerachBarAOP2Service);
  viewMultipleOpciones = signal<boolean>(false);

  valueSelectComponent = this.serachBarAOP2Service.valueSelectComponent;
  stringNoches = this.serachBarAOP2Service.stringNoches;
  listaOpciones = this.serachBarAOP2Service.listaOpciones;

  updateValueSelectComponent(value: String) {
    this.serachBarAOP2Service.updateValueSelectComponent(value);
  }

  updateMiltilpleOpciones(value: boolean) {
    this.viewMultipleOpciones.set(value);
  }

  updateValueDataFirst(value: number) {
    this.serachBarAOP2Service.updateValueDataFirst(value);
  }

  updateStringNoches(value: string) {
    this.serachBarAOP2Service.updateStringNoches(value);
  }

  update(value: String) {
    const fecha = new Date();
    const mes = fecha.toLocaleString('es-ES', { month: 'long' });
    switch (value) {
      case "Un fin de semana":
        this.updateValueSelectComponent(`Un fin de semana en ${mes} (2 noches)`)
        this.updateValueDataFirst(2);
        this.updateMiltilpleOpciones(false);
        break;
      case "Una semana":
        this.updateValueSelectComponent(`Una semana en ${mes} (7 noches)`)
        this.updateValueDataFirst(7);
        this.updateMiltilpleOpciones(false);
        break;
      case "Un mes":
        this.updateValueSelectComponent(`Un mes en ${mes} (30 noches)`)
        this.updateValueDataFirst(30);
        this.updateMiltilpleOpciones(false);
        break;
      default:
        this.updateMiltilpleOpciones(true);
        break;
    }
  }

  onInputChange(event: any) {
    const fecha = new Date();
    const mes = fecha.toLocaleString('es-ES', { month: 'long' });
    const nuevoValor = event.target.value;
    if (nuevoValor == 1) {
      this.updateStringNoches("noche");
    } else {
      this.updateStringNoches("noches");
    }
    this.updateValueDataFirst(nuevoValor);
    this.updateValueSelectComponent(`${nuevoValor} ${this.stringNoches()} en ${mes}`)
  }
}
