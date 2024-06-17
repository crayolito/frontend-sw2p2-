import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export class DestinosModa {
  imagen: String;
  pais: String;
  lugar: String;

  constructor(imagen: String, pais: String, lugar: String) {
    this.imagen = imagen;
    this.pais = pais;
    this.lugar = lugar;
  }
}

export class DescubreBolivia {
  imagen: String;
  lugar: String;
  alojamiento: number;

  constructor(imagen: String, lugar: String, alojamiento: number) {
    this.imagen = imagen;
    this.lugar = lugar;
    this.alojamiento = alojamiento;
  }
}

export class OpcionePVRS {
  icono: string;
  titulo: string;

  constructor(icono: string, titulo: string) {
    this.icono = icono;
    this.titulo = titulo;
  }
}

export class ItemPVRS {
  imagen: string;
  lugar: string;
  descripcion: string;

  constructor(imagen: string, lugar: string, descripcion: string) {
    this.imagen = imagen;
    this.lugar = lugar;
    this.descripcion = descripcion;
  }
}


@Component({
  selector: 'app-home-alojamiento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alojamiento.component.html',
  styleUrl: './alojamiento.component.css'
})
export default class AlojamientoComponent {

  opcionesPVRS: OpcionePVRS[] = [
    new OpcionePVRS(
      "assets/love.svg",
      "Amor",
    ),
    new OpcionePVRS(
      "assets/ciudad.svg",
      "Ciudad",
    ),
    new OpcionePVRS(
      "assets/aire-libre.svg",
      "Aire Libre",
    ),
    new OpcionePVRS(
      "assets/relax.svg",
      "Relax",
    ),
    new OpcionePVRS(
      "assets/playa.svg",
      "Playa",
    ),
  ]

  updateItemsPVRS(opcion: string) {
    switch (opcion) {
      case "Amor":
        this.itemPVRS = this.itemPVRS1;
        break;
      case "Ciudad":
        this.itemPVRS = this.itemPVRS2;
        break;
      case "Aire Libre":
        this.itemPVRS = this.itemPVRS3;
        break;
      case "Relax":
        this.itemPVRS = this.itemPVRS4;
        break;
      //Playa
      default:
        this.itemPVRS = this.itemPVRS5;
        break;
    }
  }

  itemPVRS1: ItemPVRS[] = [
    new ItemPVRS(
      "https://cf.bstatic.com/xdata/images/xphoto/300x240/140034727.jpg?k=9a3c2922ebfa64f2e658772acd719e624be7e784dfc12103e1394cae62384767&o=",
      "Cochabamba",
      "A 318 km"
    ),
    new ItemPVRS(
      "https://cf.bstatic.com/xdata/images/xphoto/300x240/140034712.jpg?k=246f8330805d3b93d23d97cef85645dc69b49e19c34beb34e778664467ec2b37&o=",
      "Tupiza",
      "A 486 km"
    ),
    new ItemPVRS(
      "https://cf.bstatic.com/xdata/images/xphoto/300x240/140034724.jpg?k=cbde041a514e8b497e44bd5bbc32376793aaa0777bdb95acdc752d012ac2000d&o=",
      "Coroico",
      "A 515 km"
    )
  ];

  itemPVRS2: ItemPVRS[] = [
    new ItemPVRS(
      "https://cf.bstatic.com/xdata/images/xphoto/300x240/140034716.jpg?k=9d929287c1e2836b2fb87a5d7e5b38e67986badb60ca6976370883957884f50f&o=",
      "Sucre",
      "A 260 km"
    ),
    new ItemPVRS(
      "https://cf.bstatic.com/xdata/images/xphoto/300x240/140034721.jpg?k=b8eaa34ba884711799f95a6e9c3903f47d83d784e5004840fde3f77697c4b637&o=",
      "La Paz",
      "A 545 km"
    ),
  ];

  itemPVRS3: ItemPVRS[] = [
    new ItemPVRS(
      "https://cf.bstatic.com/xdata/images/xphoto/300x240/140034715.jpg?k=b14393539664f3c3be4c9476964ffea87a5e13c4dff773b2e9733e58ded43711&o=",
      "Tarika",
      "A 448 km"
    ),
  ];

  itemPVRS4: ItemPVRS[] = [
    new ItemPVRS(
      "https://cf.bstatic.com/xdata/images/xphoto/300x240/140034727.jpg?k=9a3c2922ebfa64f2e658772acd719e624be7e784dfc12103e1394cae62384767&o=",
      "Cochabamba",
      "A 318 km"
    ),
  ];

  itemPVRS5: ItemPVRS[] = [
    new ItemPVRS(
      "https://cf.bstatic.com/xdata/images/xphoto/300x240/140034725.jpg?k=d327d5d5c35034bdd15046cf4e390b0127284527c3fd02fcf4c4235b1a84222f&o=",
      "Copacabana",
      "A 653 km"
    ),
  ];


  itemPVRS: ItemPVRS[] = this.itemPVRS1;


  descubreBolivia: DescubreBolivia[] = [
    new DescubreBolivia(
      "https://r-xx.bstatic.com/xdata/images/city/170x136/937540.jpg?k=483596b9f129d3137990bc8861687749a039d2fec4036f126d4a98e436fab5fc&o=",
      "Copacabana",
      45
    ),
    new DescubreBolivia(
      "https://q-xx.bstatic.com/xdata/images/city/170x136/950174.jpg?k=dc815c2a6fdfdc1b73f6b4150863ec1ba9597c2c52513c55a785d336f73fd2b6&o=",
      "Uyuni",
      37
    ),
    new DescubreBolivia(
      "https://q-xx.bstatic.com/xdata/images/city/170x136/775099.jpg?k=4cf4fb40604766abbb232304456e029eb9557445d6fac6af12f71101561cfcff&o=",
      "Tarija",
      55
    ),
    new DescubreBolivia(
      "https://r-xx.bstatic.com/xdata/images/city/170x136/791698.jpg?k=80048284d1ca40bbd6415585392bfc7478496590177ef0dd0bd19448ac674194&o=",
      "Potosi",
      25
    ),
    new DescubreBolivia(
      "https://r-xx.bstatic.com/xdata/images/city/170x136/879495.jpg?k=43624fd3fb3c1c252373304b9af39b1c25ad19a78535794de0787679058e2861&o=",
      "Samaipata",
      34
    ),
    new DescubreBolivia(
      "https://q-xx.bstatic.com/xdata/images/region/170x136/55068.jpg?k=816c73989e6038c1b1d47fa4309690b0ddfcd48309815ec82ef9ea936b90ae9c&o=",
      "Isla del Sol",
      25
    ),
  ];

  destinosModa1: DestinosModa[] = [
    new DestinosModa(
      "https://cf.bstatic.com/xdata/images/city/600x600/654289.jpg?k=fa24a9dca533bda7b26fd45dda3255bda6a6ec330f130b1c5a86334e724d7386&o=",
      "Santa Cruz de la Sierra",
      "assets/banderaBolivia.png"
    ),
    new DestinosModa(
      "https://cf.bstatic.com/xdata/images/city/600x600/653662.jpg?k=dbc98491327fd1e18caf71c5e149f4fa9f9df03698b55aba9c6be3a711011d2c&o=",
      "Arequipa",
      "assets/banderaPeru.png"
    ),
  ];
  destinosModa2: DestinosModa[] = [
    new DestinosModa(
      "https://cf.bstatic.com/xdata/images/city/600x600/813454.jpg?k=ca510fd3406675ef73fbc462a17bf10b1e21de72137981532f0bb04dc34eee0a&o=",
      "Cochabamba",
      "assets/banderaBolivia.png"
    ),
    new DestinosModa(
      "https://i.pinimg.com/564x/a5/b7/80/a5b7802b5f0fea5f36aed7d6e030f18c.jpg",
      "Cusco",
      "assets/banderaPeru.png"
    ),
    new DestinosModa(
      "https://cf.bstatic.com/xdata/images/city/600x600/911364.jpg?k=ee16239fbf157173f4b1d59a935d0ec91fb6f6826f645af826c6ce33d9b9093b&o=",
      "Sucre",
      "assets/banderaBolivia.png"
    ),
  ];


}
