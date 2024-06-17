import { Injectable, signal } from '@angular/core';

export class CuantosViajeros {
  adulto: number;
  joven: number;
  nino: number;

  constructor(adulto: number, joven: number, nino: number) {
    this.adulto = adulto;
    this.joven = joven;
    this.nino = nino;
  }
}

@Injectable({
  providedIn: 'root'
})
export class SerachBarVOP3Service {
  valueCuantosViajeros = signal<CuantosViajeros>(new CuantosViajeros(0, 0, 0));
  constructor() { }
}
