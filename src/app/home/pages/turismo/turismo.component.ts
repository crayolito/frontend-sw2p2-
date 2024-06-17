import { Component } from '@angular/core';

export class DestinoTop {
  image: string;
  titulo: string;
  numero: number;

  constructor(image: string, titulo: string, numero: number) {
    this.image = image;
    this.titulo = titulo;
    this.numero = numero;
  }
}

@Component({
  selector: 'app-home-turismo',
  standalone: true,
  imports: [],
  templateUrl: './turismo.component.html',
  styleUrl: './turismo.component.css'
})
export default class TurismoComponent {

  destinosTop: DestinoTop[] = [
    // PERU
    new DestinoTop(
      "https://i.pinimg.com/564x/ee/59/2f/ee592f2f06c5f7f0341b03ad3504f4bd.jpg",
      "Cusco",
      104
    ),
    new DestinoTop(
      "https://i.pinimg.com/564x/fc/cb/0f/fccb0f3dd14385641fb5084d188c48ef.jpg",
      "Lima",
      48
    ),
    new DestinoTop(
      "https://i.pinimg.com/564x/90/42/ea/9042ea1bf96ae07047e44b140c3f3f2b.jpg",
      "Arequipa",
      34
    ),
    new DestinoTop(
      "https://i.pinimg.com/564x/a7/c7/40/a7c740e46dffe89e30bdd2a40a2c70d3.jpg",
      "Puno",
      25
    ),
    new DestinoTop(
      "https://i.pinimg.com/564x/46/f8/cf/46f8cf13b9b442ece0655e9b69f81ecf.jpg",
      "La Libertad",
      21
    ),
    new DestinoTop(
      "https://i.pinimg.com/564x/67/c6/4c/67c64c4f948b31e4f0e806d9b593f701.jpg",
      "Ica",
      16
    ),
    // BOLIVIA
    new DestinoTop(
      "https://i.pinimg.com/564x/c1/75/84/c1758459f3d89e8f3e79bc10af12deeb.jpg",
      "La Paz",
      51
    ),
    new DestinoTop(
      "https://i.pinimg.com/564x/9b/ba/ba/9bbaba16e8caf4d9c270b7c2784ef3bc.jpg",
      "Santa Cruz",
      42
    ),
    new DestinoTop(
      "https://i.pinimg.com/564x/fe/24/b2/fe24b297739c55ef78711d407a363812.jpg",
      "Cochabamba",
      37
    ),
    new DestinoTop(
      "https://i.pinimg.com/564x/89/71/e3/8971e36b33dd2852b442670885ef9a30.jpg",
      "Potosí",
      25
    ),
    new DestinoTop(
      "https://i.pinimg.com/564x/e2/18/39/e21839dd623260c39f96d6a5cd0f6b97.jpg",
      "Oruro",
      20
    ),
    new DestinoTop(
      "https://i.pinimg.com/564x/19/dc/aa/19dcaaa5053443c1ab4e84589fe77700.jpg",
      "Chuquisaca",
      17
    ),
  ];
}
