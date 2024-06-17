import { Injectable, signal } from '@angular/core';

export class LugarViaje {
  departamento: string;
  pais: string;
  constructor(departamento: string, pais: string) {
    this.departamento = departamento;
    this.pais = pais;
  }
}

@Injectable({
  providedIn: 'root'
})
export class SerachBarAOP1Service {

  lugaresViaje: LugarViaje[] = [
    new LugarViaje("Cusco", "Perú"),
    new LugarViaje("La Paz", "Bolivia"),
    new LugarViaje("Arequipa", "Perú"),
    new LugarViaje("Potosí", "Bolivia"),
    new LugarViaje("Lima", "Perú"),
    new LugarViaje("Oruro", "Bolivia")
  ];

  componentVisible = signal<boolean>(true);
  public dataOriginal = signal<LugarViaje>(
    new LugarViaje("", "")
  );
  valorSeleccionado = signal<String>("");

  seleccionarLugar(lugar: LugarViaje) {
    this.dataOriginal.set(new LugarViaje(lugar.departamento, lugar.pais));
    this.valorSeleccionado.set(lugar.departamento);
  }

  getDataLugarViaje(): LugarViaje {
    return this.dataOriginal();
  }

  resetValor() {
    this.valorSeleccionado.set("");
  }
}
