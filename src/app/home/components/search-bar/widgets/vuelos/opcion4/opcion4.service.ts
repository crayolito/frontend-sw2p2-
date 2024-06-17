import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SerachBarVOP4Service {
  valorSeleccionado = signal<String>("");

  seleccionarCategoriaViaje(categoria: string) {
    this.valorSeleccionado.set(categoria);
  }
  constructor() { }
}
