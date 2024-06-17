import { AgenciaAlojamiento } from "../dashboard/pages/perfil/perfil.service";
import { AuthUser } from "./authentication.service";

export const authUsers: AuthUser[] = [
  new AuthUser("1", 'juan.perez@gmail.com', 'clave123', 'viajero'),
  new AuthUser("2", 'maria.lopez@gmail.com', 'clave123', 'viajero'),
  new AuthUser("3", 'carlos.martinez@gmail.com', 'clave123', 'viajero'),
  new AuthUser("4", 'laura.gonzalez@gmail.com', 'clave123', 'viajero'),
  new AuthUser("5", 'diego.fernandez@gmail.com', 'clave123', 'viajero'),
  new AuthUser("6", 'ana.rodriguez@gmail.com', 'clave123', 'viajero'),
  new AuthUser("7", 'martin.garcia@gmail.com', 'clave123', 'viajero'),
  new AuthUser("8", 'luis.morales@gmail.com', 'clave123', 'viajero'),
  new AuthUser("9", 'sofia.ramirez@gmail.com', 'clave123', 'viajero'),
  new AuthUser("1", 'pedro.mendez@gmail.com', 'clave123', 'viajero'),
  new AuthUser("1", 'agencia1@alojamiento.com', 'clave123', 'agenciaAlojamiento'),
  new AuthUser("1", 'agencia2@alojamiento.com', 'clave123', 'agenciaAlojamiento'),
  new AuthUser("1", 'agencia3@alojamiento.com', 'clave123', 'agenciaAlojamiento'),
  new AuthUser("1", 'agencia4@alojamiento.com', 'clave123', 'agenciaAlojamiento'),
  new AuthUser("1", 'agencia5@alojamiento.com', 'clave123', 'agenciaAlojamiento')
];



export const agenciasAlojamiento: AgenciaAlojamiento[] = [
  new AgenciaAlojamiento(
    1,
    'Hotel Estrella Mar',
    'Luis García',
    'https://i.pinimg.com/564x/7a/a1/94/7aa19415266b8ad0ad570b7d2ecc3e8e.jpg',
    '24 horas',
    5551234567,
    '-17.3935,-66.1570',
    'Av. Ballivián 1234, Cochabamba, Bolivia',
    5,
    'Piscina, Wi-Fi gratuito, Desayuno Incluido, Estacionamiento, Gimnasio, Restaurante',
    [
      'Habitación Individual Estandar',
      'Habitación Doble Estandar',
      'Habitación Triple Estandar',
      'Habitación Suite Junior',
      'Habitación Individual Estandar',
      'Habitación Doble Estandar',
      'Habitación Triple Estandar',
      'Habitación Individual Superior',
      'Habitación Doble Superior',
      'Habitación Triple Superior',
    ],
    'https://www.instagram.com/bookingcom/',
    'https://www.facebook.com/bookingcom',
    'https://www.booking.com/index.es.html?aid=2311236'
  ),
  new AgenciaAlojamiento(
    2,
    'Hostal Los Andes',
    'María Pérez',
    'https://i.pinimg.com/564x/6b/61/9b/6b619b18f89bcdceec7e223c28e99f8e.jpg',
    '06:00 - 23:00',
    5552345678,
    '-16.4090,-71.5375',
    'Calle Mercaderes 123, Arequipa, Perú',
    4,
    'Wi-Fi gratuito, Desayuno Incluido, Estacionamiento, Restaurante, Ascensor, Servicio Habitación',
    [
      'Habitación Doble Superior',
      'Habitación Triple Superior',
      'Habitación Suite Execuite',
      'Habitación Cama Queen',
      'Habitación Estudio'
    ],
    'https://www.instagram.com/bookingcom/',
    'https://www.facebook.com/bookingcom',
    'https://www.booking.com/index.es.html?aid=2311236'
  ),
  new AgenciaAlojamiento(
    3,
    'Eco Lodge Titicaca',
    'José Fernández',
    'https://example.com/imagen3.jpg',
    '07:00 - 22:00',
    5553456789,
    '-15.8402,-69.3506',
    'Isla del Sol, Lago Titicaca, Bolivia',
    4,
    'Piscina, Wi-Fi gratuito, Desayuno Incluido, Admiten Mascotas, Bar, Zona Diversión',
    [
      'Habitación Individual Deluxe',
      'Habitación Doble Deluxe',
      'Habitación Triple Deluxe',
      'Habitación Suite Junior',
      'Habitación Cuádruple'
    ],
    'https://www.instagram.com/bookingcom/',
    'https://www.facebook.com/bookingcom',
    'https://www.booking.com/index.es.html?aid=2311236'
  ),
  new AgenciaAlojamiento(
    4,
    'Hotel Camino Real',
    'Ana Rodríguez',
    'https://example.com/imagen4.jpg',
    '24 horas',
    5554567890,
    '-19.5723,-65.7550',
    'Av. Hernando Siles 5432, Sucre, Bolivia',
    5,
    'Piscina, Wi-Fi gratuito, Desayuno Incluido, Spa y centro bienestar, Restaurante, Servicio Habitación',
    [
      'Habitación Individual Estandar',
      'Habitación Doble Estandar',
      'Habitación Triple Estandar',
      'Habitación Doble Superior',
      'Habitación Suite Execuite'
    ],
    'https://www.instagram.com/bookingcom/',
    'https://www.facebook.com/bookingcom',
    'https://www.booking.com/index.es.html?aid=2311236'
  ),
  new AgenciaAlojamiento(
    5,
    'Cusco Boutique Hotel',
    'Carlos Díaz',
    'https://example.com/imagen5.jpg',
    '05:00 - 24:00',
    5555678901,
    '-13.5167,-71.9781',
    'Calle Palacio 135, Cusco, Perú',
    4,
    'Piscina, Wi-Fi gratuito, Desayuno Incluido, Gimnasio, Restaurante, Traslado aeropuerto',
    [
      'Habitación Doble Deluxe',
      'Habitación Triple Deluxe',
      'Habitación Suite Junior',
      'Habitación Suite Execuite',
      'Habitación Doble Twin'
    ],
    'https://www.instagram.com/bookingcom/',
    'https://www.facebook.com/bookingcom',
    'https://www.booking.com/index.es.html?aid=2311236'
  )
];


  // public ofertaLista: Oferta[] = [
  //   new Oferta(
  //     '21',
  //     'Experiencia de Lujo en Habitación Suite Ejecutiva',
  //     1000,
  //     30,
  //     'https://i.pinimg.com/564x/83/a0/d2/83a0d2bd6b3b23d7bbfd880eaed3e0f0.jpg',
  //     8,
  //     'Disfrute de lo mejor en lujo y comodidad en nuestra exclusiva Habitación Suite Ejecutiva. Esta oferta única incluye todos los lujos que pueda imaginar, desde aire acondicionado y baño privado hasta una piscina privada y una cocina completamente equipada. Relájese en el balcón privado mientras disfruta de las vistas panorámicas y descanse en el cómodo sofá mientras disfruta de una bebida del minibar. Además, podrá disfrutar de servicios exclusivos como lavadora, secador de pelo y TV de pantalla plana con canales premium. Esta es una experiencia que no querrá perderse.',
  //     ['Habitación Suite Ejecutiva'],
  //     'Vendida'
  //   ),
  //   new Oferta(
  //     '22',
  //     'Escapada de Lujo en Habitación Triple Deluxe',
  //     800,
  //     25,
  //     'https://i.pinimg.com/564x/44/75/9e/44759e15e2686758ae54ab15120b3d0f.jpg',
  //     4,
  //     'Sumérjase en el lujo y la elegancia en nuestra espaciosa Habitación Triple Deluxe. Esta oferta exclusiva está diseñada para ofrecerle una experiencia inolvidable con todas las comodidades y servicios que pueda desear. Disfrute de un baño privado con jacuzzi, una cocina gourmet completamente equipada y un amplio balcón con vistas espectaculares. Relájese en la sala de estar con un cómodo sofá y una TV de pantalla plana con canales premium. Además, podrá disfrutar de servicios exclusivos como aire acondicionado, lavavajillas y minibar. Esta es la escapada de lujo que se merece.',
  //     ['Habitación Triple Deluxe'],
  //     'Disponible'
  //   ),
  //   new Oferta(
  //     '23',
  //     'Estancia Romántica en Habitación Suite Junior',
  //     600,
  //     20,
  //     'https://i.pinimg.com/564x/33/3c/66/333c6667a6a7bda4fdf8d63760ab549a.jpg',
  //     7,
  //     'Celebre el amor y la intimidad en nuestra encantadora Habitación Suite Junior. Esta oferta especial incluye todas las comodidades necesarias para una escapada romántica inolvidable. Disfrute de un baño privado con bañera de hidromasaje, una cocina totalmente equipada y un amplio balcón con vistas panorámicas. Relájese en la cama king-size con sábanas de lujo y disfrute de una cena privada en la terraza. Además, podrá disfrutar de servicios exclusivos como aire acondicionado, minibar y cafetera y tetera en la habitación. Esta es la escapada romántica perfecta para parejas.',
  //     ['Habitación Suite Junior'],
  //     'Vendida'
  //   ),
  //   new Oferta(
  //     '24',
  //     'Vacaciones Familiares en Habitación Doble Superior',
  //     700,
  //     15,
  //     'https://i.pinimg.com/736x/92/60/4d/92604da95b7ab5ba0a4594f5232f45b9.jpg',
  //     10,
  //     'Disfrute de unas vacaciones familiares inolvidables en nuestra espaciosa Habitación Doble Superior. Esta oferta exclusiva incluye todas las comodidades necesarias para una estancia cómoda y relajante, desde aire acondicionado y baño privado hasta una cocina totalmente equipada y un balcón privado con vistas al jardín. Relájese en la sala de estar con un cómodo sofá y una TV de pantalla plana con canales premium. Además, podrá disfrutar de servicios exclusivos como lavadora, secador de pelo y minibar. Esta es la escapada perfecta para toda la familia.',
  //     ['Habitación Doble Superior'],
  //     'Reservado'
  //   ),
  //   new Oferta(
  //     '25',
  //     'Retiro de Bienestar en Habitación Individual Estándar',
  //     500,
  //     10,
  //     'https://i.pinimg.com/564x/be/76/49/be7649e72c27f5f69e2634258882cf17.jpg',
  //     5,
  //     'Recargue su cuerpo y su mente en nuestro retiro de bienestar en la cómoda Habitación Individual Estándar. Esta oferta especial está diseñada para ofrecerle una experiencia relajante y rejuvenecedora con todas las comodidades',
  //     ['Habitación Doble Superior', 'Habitación Individual Estándar'],
  //     'Disponible'
  //   ),
  //   new Oferta(
  //     '26',
  //     'Escapada de Lujo en Habitación Doble Estandar',
  //     750,
  //     20,
  //     'https://i.pinimg.com/564x/79/f8/18/79f818f295441d67aed33bdecd54df00.jpg',
  //     7,
  //     'Disfruta de una escapada de lujo en nuestra elegante Habitación Doble Estándar. Relájate en el aire acondicionado mientras disfrutas de una película en la TV de pantalla plana con canales premium. Prepara deliciosas comidas en la cocina totalmente equipada y refréscate en la piscina privada. Termina el día viendo la puesta de sol desde el balcón con un cóctel del minibar.',
  //     ['Habitación Doble Estándar'],
  //     'Vendida'
  //   ),
  //   new Oferta(
  //     '27',
  //     'Retiro de Bienestar en Habitación Individual Superior',
  //     600,
  //     15,
  //     'https://i.pinimg.com/564x/c3/64/7e/c3647e63e0ced7bf2baf2e5113d0c9c2.jpg',
  //     12,
  //     'Escápate del ajetreo diario y sumérgete en la tranquilidad de nuestra Habitación Individual Superior. Disfruta de un baño relajante en la bañera de hidromasaje, prepara tus comidas favoritas en la cocina totalmente equipada y disfruta de las vistas panorámicas desde la terraza privada. Además, relájate en el sofá mientras disfrutas de una película en la TV de pantalla plana con canales premium.',
  //     ['Habitación Individual Superior'],
  //     'Disponible'
  //   ),
  //   new Oferta(
  //     '28',
  //     'Vacaciones Familiares en Habitación Triple Estandar',
  //     800,
  //     10,
  //     'https://i.pinimg.com/564x/bd/6b/a3/bd6ba31e28b80ea94ddf14bbfc5f154f.jpg',
  //     3,
  //     'Disfruta de unas vacaciones familiares inolvidables en nuestra espaciosa Habitación Triple Estándar. Relájate en el aire acondicionado mientras los niños se divierten en la piscina privada. Prepara deliciosas comidas en la cocina totalmente equipada y disfruta de una noche de películas en el sofá. Además, disfruta de servicios adicionales como una lavadora, secadora y minibar surtido.',
  //     ['Habitación Triple Estándar'],
  //     'Reservado'
  //   ),
  //   new Oferta(
  //     '29',
  //     'Estancia de Lujo en Habitación Suite Deluxe',
  //     1200,
  //     25,
  //     'https://i.pinimg.com/564x/28/ff/1b/28ff1b169da56ecaf018f05cd541c423.jpg',
  //     3,
  //     'Vive la experiencia definitiva de lujo en nuestra exclusiva Habitación Suite Deluxe. Disfruta de todas las comodidades de casa, como una cocina totalmente equipada, un baño privado con jacuzzi y un amplio balcón con vistas espectaculares. Relájate en el sofá mientras disfrutas de una película en la TV de pantalla plana o disfruta de un refrescante baño en la piscina privada.',
  //     ['Habitación Suite Deluxe'],
  //     'Vendida'
  //   ),
  //   new Oferta(
  //     '30',
  //     'Escapada Romántica en Habitación Suite Junior',
  //     900,
  //     20,
  //     'https://i.pinimg.com/564x/f5/5b/cd/f55bcdc723c26dfb357cdeaae7fe137e.jpg',
  //     6,
  //     'Celebra el amor en nuestra encantadora Habitación Suite Junior. Disfruta de una noche romántica en el balcón con vistas panorámicas, relájate en el baño de hidromasaje y disfruta de una cena íntima en la terraza. Además, disfruta de servicios exclusivos como una cocina totalmente equipada, minibar surtido y servicio de habitaciones las 24 horas.',
  //     ['Habitación Suite Junior'],
  //     'Reservado'
  //   ),
  //   new Oferta(
  //     '41',
  //     'Vacaciones Familiares en Suite Familiar de Lujo',
  //     1200,
  //     10,
  //     'https://i.pinimg.com/564x/ae/e7/63/aee763e8d72e7a7a5af1bf647ac134ae.jpg',
  //     7,
  //     'Disfruta de unas vacaciones familiares inolvidables en nuestra lujosa Suite Familiar de Lujo. Esta suite espaciosa cuenta con todas las comodidades que puedas desear, incluyendo una cocina totalmente equipada, una sala de estar acogedora con un cómodo sofá, una piscina privada para toda la familia y un balcón con vistas panorámicas al jardín. Además, disfruta de servicios exclusivos como una lavadora, secadora, minibar surtido y acceso a nuestras instalaciones recreativas.',
  //     [
  //       'Habitación Familiar Deluxe',
  //       'Habitación Doble Deluxe',
  //       'Habitación Triple Deluxe',
  //       'Habitación Suite Junior',
  //     ],
  //     'Disponible'
  //   ),
  //   new Oferta(
  //     '42',
  //     'Escapada Romántica en Suite de Luna de Miel',
  //     1500,
  //     15,
  //     'https://i.pinimg.com/736x/d9/c9/e2/d9c9e20ebfdaf4233d70a896e0ebe46e.jpg',
  //     9,
  //     'Celebra el amor en nuestra romántica Suite de Luna de Miel. Esta suite exclusiva está diseñada para parejas que buscan una escapada íntima y lujosa. Disfruta de un baño relajante en la bañera de hidromasaje, cena al aire libre en el balcón privado con vistas al mar, y relájate en la cama king-size con sábanas de lujo. Además, disfruta de servicios exclusivos como aire acondicionado, minibar surtido y acceso al spa y centro de bienestar.',
  //     ['Habitación Suite Deluxe', 'Habitación Suite Junior'],
  //     'Disponible'
  //   ),
  //   new Oferta(
  //     '43',
  //     'Retiro de Bienestar en Bungalow de Lujo',
  //     1800,
  //     20,
  //     'https://i.pinimg.com/564x/64/d4/92/64d4922feed98df0a4ae70a8551d7c1e.jpg',
  //     7,
  //     'Escápate del estrés y sumérgete en la tranquilidad de nuestro bungalow de lujo. Este alojamiento exclusivo ofrece todas las comodidades de un hogar lejos de casa, incluyendo una cocina totalmente equipada, una amplia sala de estar con vistas al jardín, una piscina privada para relajarse y un área de barbacoa para disfrutar de deliciosas comidas al aire libre. Además, disfruta de servicios exclusivos como aire acondicionado, TV de pantalla plana con canales premium y acceso a nuestras instalaciones recreativas.',
  //     [
  //       'Habitación Doble Deluxe',
  //       'Habitación Triple Deluxe',
  //       'Habitación Suite Junior',
  //     ],
  //     'Disponible'
  //   ),
  //   new Oferta(
  //     '44',
  //     'Vacaciones de Aventura en Villa de Montaña',
  //     2000,
  //     25,
  //     'https://i.pinimg.com/736x/32/00/43/320043166cad9ada86ff8d94b5d15f8c.jpg',
  //     4,
  //     'Embárcate en una emocionante aventura en nuestra villa de montaña. Esta amplia villa ofrece todo lo que necesitas para unas vacaciones inolvidables, incluyendo una cocina gourmet, una sala de estar acogedora con chimenea, un jacuzzi al aire libre con vistas panorámicas y una terraza privada para disfrutar del aire fresco de la montaña. Además, disfruta de servicios exclusivos como aire acondicionado, minibar surtido y acceso a nuestras actividades al aire libre.',
  //     [
  //       'Habitación Doble Superior',
  //       'Habitación Triple Superior',
  //       'Habitación Suite Junior',
  //       'Habitación Suite Execuite',
  //     ],
  //     'Reservado'
  //   ),
  //   new Oferta(
  //     '45',
  //     'Retiro de Bienestar en Casa de Playa',
  //     2500,
  //     30,
  //     'https://i.pinimg.com/564x/d2/81/3f/d2813fb81b2d9c55d3a54f871b120e31.jpg',
  //     8,
  //     'Recarga tu cuerpo y tu mente en nuestro retiro de bienestar en la playa. Esta amplia casa ofrece todas las comodidades que necesitas para una escapada relajante, incluyendo una cocina totalmente equipada, una sala de estar luminosa con vistas al mar, una piscina privada para refrescarse y una terraza cubierta para disfrutar de las puestas de sol. Además, disfruta de servicios exclusivos como aire acondicionado, TV de pantalla plana con canales premium y acceso directo a la playa.',
  //     [
  //       'Habitación Doble Superior',
  //       'Habitación Triple Superior',
  //       'Habitación Suite Junior',
  //       'Habitación Suite Execuite',
  //     ],
  //     'Reservado'
  //   ),
  //   new Oferta(
  //     '46',
  //     'Vacaciones en Familia en Casa Rural',
  //     1800,
  //     15,
  //     'https://i.pinimg.com/564x/b3/08/c4/b308c443ede6447285bb0be52200559d.jpg',
  //     10,
  //     'Disfruta de unas vacaciones en familia en nuestra acogedora casa rural. Este alojamiento espacioso ofrece todas las comodidades de un hogar lejos de casa, incluyendo una cocina totalmente equipada, una sala de estar con chimenea, un jardín privado con zona de juegos para niños y una piscina compartida para refrescarse en los días calurosos. Además, disfruta de servicios exclusivos como aire acondicionado, TV de pantalla plana con canales premium y acceso a actividades al aire libre.',
  //     [
  //       'Habitación Doble Estándar',
  //       'Habitación Triple Estándar',
  //       'Habitación Familiar Estándar',
  //       'Habitación Suite Junior',
  //     ],
  //     'Vendida'
  //   ),
  //   new Oferta(
  //     '51',
  //     'Vacaciones Familiares en Casa de Montaña',
  //     2500,
  //     25,
  //     'https://i.pinimg.com/564x/74/ee/7f/74ee7fa254f65f5ce0507bc320f5726c.jpg',
  //     5,
  //     'Disfruta de unas vacaciones inolvidables en nuestra espaciosa Casa de Montaña. Esta casa ofrece todas las comodidades necesarias para una estancia perfecta, incluyendo una cocina gourmet, una sala de estar con chimenea, una piscina privada y un balcón con vistas impresionantes. Además, cuenta con servicios como aire acondicionado, lavadora, secadora y minibar surtido.',
  //     [
  //       'Habitación Doble Superior',
  //       'Habitación Triple Superior',
  //       'Habitación Suite Junior',
  //       'Habitación Suite Ejecutiva',
  //     ],
  //     'Vendida'
  //   ),

  //   new Oferta(
  //     '52',
  //     'Retiro de Lujo en Villa Privada',
  //     3200,
  //     20,
  //     'https://i.pinimg.com/564x/03/3f/f1/033ff1a0155987d09cc728ecd2dfe7ef.jpg',
  //     4,
  //     'Relájate en nuestra lujosa Villa Privada, perfecta para una escapada exclusiva. Disfruta de una piscina privada, una cocina completamente equipada, un jacuzzi al aire libre y una terraza con vistas al océano. Además, cuenta con servicios como aire acondicionado, TV de pantalla plana con canales premium, lavavajillas y minibar surtido.',
  //     [
  //       'Habitación Doble Deluxe',
  //       'Habitación Triple Deluxe',
  //       'Habitación Suite Junior',
  //       'Habitación Suite Ejecutiva',
  //     ],
  //     'Reservado'
  //   ),

  //   new Oferta(
  //     '53',
  //     'Escapada Romántica en Cabaña en el Bosque',
  //     2100,
  //     15,
  //     'https://i.pinimg.com/564x/5e/5d/62/5e5d620b50aa786ef7ae2affe89a0d7e.jpg',
  //     3,
  //     'Escápate a nuestra romántica Cabaña en el Bosque. Este acogedor alojamiento incluye una cocina básica, una sala de estar con chimenea, una bañera de hidromasaje al aire libre y un balcón con vistas al bosque. Además, disfruta de servicios como aire acondicionado, minibar, cafetera y tetera y acceso a senderos para caminatas.',
  //     [
  //       'Habitación Doble Superior',
  //       'Habitación Suite Junior',
  //       'Habitación Suite Ejecutiva',
  //     ],
  //     'Reservado'
  //   ),

  //   new Oferta(
  //     '54',
  //     'Vacaciones de Aventura en Rancho Exclusivo',
  //     2800,
  //     18,
  //     'https://i.pinimg.com/564x/0b/bb/b9/0bbbb9961906f175f18e25af3bc3a3b6.jpg',
  //     4,
  //     'Disfruta de unas vacaciones de aventura en nuestro Rancho Exclusivo. Este alojamiento ofrece una cocina completa, una sala de estar con estufa de leña, una piscina privada y un área de barbacoa. Además, cuenta con servicios como aire acondicionado, TV de pantalla plana con canales premium, lavadora y secadora, y utensilios de cocina.',
  //     [
  //       'Habitación Doble Estándar',
  //       'Habitación Triple Estándar',
  //       'Habitación Suite Junior',
  //       'Habitación Suite Ejecutiva',
  //     ],
  //     'Reservado'
  //   ),

  //   new Oferta(
  //     '55',
  //     'Retiro de Bienestar en Casa de Playa',
  //     2700,
  //     20,
  //     'https://i.pinimg.com/564x/64/81/b1/6481b1cc7606952493204f56381c7a9e.jpg',
  //     4,
  //     'Recarga energías en nuestra Casa de Playa, perfecta para un retiro de bienestar. Disfruta de una cocina completa, una sala de estar con vistas al mar, una piscina privada y una terraza para disfrutar del sol. Además, cuenta con servicios como aire acondicionado, TV de pantalla plana, microondas, minibar surtido y cafetera y tetera.',
  //     [
  //       'Habitación Doble Deluxe',
  //       'Habitación Triple Deluxe',
  //       'Habitación Suite Junior',
  //       'Habitación Suite Ejecutiva',
  //     ],
  //     'Disponible'
  //   ),

  //   new Oferta(
  //     '56',
  //     'Escapada en Familia en Chalet Alpino',
  //     3000,
  //     22,
  //     'https://i.pinimg.com/564x/c0/be/2f/c0be2f1c53faf9f46d3421eb3530f059.jpg',
  //     5,
  //     'Disfruta de una escapada en familia en nuestro acogedor Chalet Alpino. Este chalet ofrece una cocina totalmente equipada, una sala de estar con chimenea, una piscina privada y un balcón con vistas a las montañas. Además, cuenta con servicios como aire acondicionado, TV de pantalla plana, lavavajillas, lavadora y minibar surtido.',
  //     ['Habitación Doble Superior', 'Habitación Suite Ejecutiva'],
  //     'Disponible'
  //   ),
  //   new Oferta(
  //     '57',
  //     'Vacaciones de Lujo en Villa de Golf',
  //     3500,
  //     25,
  //     'https://i.pinimg.com/564x/b9/06/1c/b9061c890092927946e6f6ab34f57027.jpg',
  //     4,
  //     'Disfruta de unas vacaciones de lujo en nuestra Villa de Golf. Este alojamiento exclusivo ofrece una cocina gourmet, una sala de estar con vistas al campo de golf, una piscina privada y una terraza con zona de barbacoa. Además, cuenta con servicios como aire acondicionado, TV de pantalla plana, lavadora y secadora, y minibar surtido.',
  //     [
  //       'Habitación Doble Deluxe',
  //       'Habitación Triple Deluxe',
  //       'Habitación Suite Junior',
  //       'Habitación Suite Ejecutiva',
  //     ],
  //     'Disponible'
  //   ),
  // ];
