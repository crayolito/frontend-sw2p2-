import { Injectable, signal } from '@angular/core';

export class InfoDondeIran {
  adulto: number;
  nino: number;
  habitacion: number;

  constructor(adulto: number, nino: number, habitacion: number) {
    this.adulto = adulto;
    this.nino = nino;
    this.habitacion = habitacion;
  }
}
@Injectable({
  providedIn: 'root'
})
export class SerachBarAOP3Service {
  valueDataOriginal = signal<InfoDondeIran>(new InfoDondeIran(1, 1, 1))
}
