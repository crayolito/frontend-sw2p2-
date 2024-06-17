import { Component, inject, signal } from '@angular/core';
import { InputNumberComponent } from '../../../../../../shared/input-number/input-number.component';
import { InfoDondeIran, SerachBarAOP3Service, } from './opcion3.service';



@Component({
  selector: 'app-alojamiento-opcion3',
  standalone: true,
  imports: [InputNumberComponent],
  templateUrl: './opcion3.component.html',
  styleUrl: './opcion3.component.css'
})
export class AlojamientoOpcion3Component {

  valueViewCliente = signal<string>("");
  serachBarAOP3Service = inject(SerachBarAOP3Service);

  //Adultos
  onValueInput1(value: number) {
    this.serachBarAOP3Service.valueDataOriginal.update((prev) => {
      return new InfoDondeIran(value, prev.nino, prev.habitacion);
    })
    let { adulto, nino, habitacion } = this.serachBarAOP3Service.valueDataOriginal();
    this.valueViewCliente.set(`${adulto} adulto · ${nino} niño · ${habitacion} habitacion`);
  }

  //Niños
  onValueInput2(value: number) {
    this.serachBarAOP3Service.valueDataOriginal.update((prev) => {
      return new InfoDondeIran(prev.adulto, value, prev.habitacion);
    })
    let { adulto, nino, habitacion } = this.serachBarAOP3Service.valueDataOriginal();
    this.valueViewCliente.set(`${adulto} adulto · ${nino} niño · ${habitacion} habitacion`);
  }

  //Habitaciones
  onValueInput3(value: number) {
    this.serachBarAOP3Service.valueDataOriginal.update((prev) => {
      return new InfoDondeIran(prev.adulto, prev.nino, value);
    })
    let { adulto, nino, habitacion } = this.serachBarAOP3Service.valueDataOriginal();
    this.valueViewCliente.set(`${adulto} adulto · ${nino} niño · ${habitacion} habitacion`);
  }
}
