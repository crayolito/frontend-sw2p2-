import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SerachBarAOP2Service {
  listaOpciones: String[] = ['Un fin de semana', 'Una semana', 'Un mes', 'Otro'];
  valueSelectComponent = signal<String>("¿Cuánto tiempo se ira");
  valueDataFirst = signal<number>(1);
  stringNoches = signal<string>("noche");

  // READ : ES LA DATA PARA CLIENTE VEA (UN FIN DE SEMANA EN JUNIO 2 NOCHES) (4 NOCHES EN JUNIO)
  updateValueSelectComponent(value: String) {
    this.valueSelectComponent.set(value);
  }

  // READ : ES LA DATA PRINCIPAL SOLO DA EL NUMERO DE NOCHES QUE NECESITA EL CLIENTE
  updateValueDataFirst(value: number) {
    this.valueDataFirst.set(value);
  }

  // READ: NOCHES O NOCHE
  updateStringNoches(value: string) {
    this.stringNoches.set(value);
  }
}
