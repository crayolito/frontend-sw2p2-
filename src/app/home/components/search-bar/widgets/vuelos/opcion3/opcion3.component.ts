import { Component, inject, signal } from '@angular/core';
import { CuantosViajeros, SerachBarVOP3Service } from './opcion3.service';
import { InputNumberComponent } from '../../../../../../shared/input-number/input-number.component';

@Component({
  selector: 'app-vuelo-opcion3',
  standalone: true,
  imports: [InputNumberComponent],
  templateUrl: './opcion3.component.html',
  styleUrl: './opcion3.component.css'
})
export class VueloOpcion3Component {
  valueViewCliente = signal<string>("");
  serachBarVOP3Service = inject(SerachBarVOP3Service);

  //Adultos
  onValueInput1(value: number) {
    this.serachBarVOP3Service.valueCuantosViajeros.update((prev) => {
      return new CuantosViajeros(value, prev.joven, prev.nino);
    })
    let { adulto, nino, joven } = this.serachBarVOP3Service.valueCuantosViajeros();
    this.valueViewCliente.set(`${adulto + nino + joven} viajeros`);
  }

  //Joven
  onValueInput2(value: number) {
    this.serachBarVOP3Service.valueCuantosViajeros.update((prev) => {
      return new CuantosViajeros(prev.adulto, value, prev.nino);
    })
    let { adulto, nino, joven } = this.serachBarVOP3Service.valueCuantosViajeros();
    this.valueViewCliente.set(`${adulto + nino + joven} viajeros`);

  }

  //Niño
  onValueInput3(value: number) {
    this.serachBarVOP3Service.valueCuantosViajeros.update((prev) => {
      return new CuantosViajeros(prev.adulto, prev.nino, value);
    })
    let { adulto, nino, joven } = this.serachBarVOP3Service.valueCuantosViajeros();
    this.valueViewCliente.set(`${adulto + nino + joven} viajeros`);

  }
}
