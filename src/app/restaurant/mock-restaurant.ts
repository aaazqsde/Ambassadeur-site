import {Restaurant} from './restaurant';


export const RESTAURANTS: Restaurant[] = [
  {
    id : 1,
    nom: 'Copain comme cochon',
    ambiance: 'Conviviale',
    service: 'Terrasse',
    description: 'C\'est trop de la .....',
    ouvert: true,
    type: ['Brasserie'],
    commentaires: [{
      pseudo: 'maxime F',
      keyword: 'génial',
      date: '04/26/2017',
      description: 'J\'ai jamais aussi bien mangé de ma vie ^^' ,
      note: 5
    },
      {
        pseudo: 'guillaume L',
        keyword: '...',
        date: '04/27/2017',
        description: 'Mouais... pas assez de pates' ,
        note: 3
      },
      {
        pseudo: 'cedric B',
        keyword: 'affreux',
        date: '04/28/2017',
        description: 'J\'aime pas le sucré salé' ,
        note: 1
      }],
    images: ['D:/code/Ambassadeur-site/Ambassadeur-site/src/assets/images/1.jpg',
      'D:/code/Ambassadeur-site/Ambassadeur-site/src/assets/images/2.jpg'],
    coordinates: [{lat: 48.123737 , long: -1.213258 }]



  },
  {
    id : 2,
    nom: 'Vieux Vitré',
    ambiance: 'Familliale',
    service: 'Parking',
    description: 'Le classique',
    ouvert: true,
    type: ['Brasserie', 'Pizzeria'],
    images: ['D:/code/Ambassadeur-site/Ambassadeur-site/src/assets/images/1.jpg',
      'D:/code/Ambassadeur-site/Ambassadeur-site/src/assets/images/2.jpg'],


  },
  {
    id : 3,
    nom: 'Restaurant 3',
    ambiance: 'Familliale',
    service: 'Parking',
    description: 'Le classique',
    ouvert: false,
    type: ['Brasserie', 'Pizzeria'],
    images: ['D:/code/Ambassadeur-site/Ambassadeur-site/src/assets/images/1.jpg',
      'D:/code/Ambassadeur-site/Ambassadeur-site/src/assets/images/2.jpg'],

  },
  {
    id : 4,
    nom: 'Restaurant 4',
    ambiance: 'Familliale',
    service: 'Parking',
    description: 'Le classique',
    ouvert: true,
    type: ['Brasserie', 'Pizzeria'],
    images: ['D:/code/Ambassadeur-site/Ambassadeur-site/src/assets/images/1.jpg',
      'D:/code/Ambassadeur-site/Ambassadeur-site/src/assets/images/2.jpg'],

  },
  {
    id : 5,
    nom: 'Restaurant 5',
    ambiance: 'Familliale',
    service: 'Parking',
    description: 'Le classique',
    ouvert: true,
    type: ['Brasserie', 'Pizzeria'],
    images: ['D:/code/Ambassadeur-site/Ambassadeur-site/src/assets/images/1.jpg',
      'D:/code/Ambassadeur-site/Ambassadeur-site/src/assets/images/2.jpg'],

  },
  {
    id : 6,
    nom: 'Restaurant 6',
    ambiance: 'Familliale',
    service: 'Parking',
    description: 'Le classique',
    ouvert: true,
    type: ['Brasserie', 'Pizzeria'],
    images: ['D:/code/Ambassadeur-site/Ambassadeur-site/src/assets/images/1.jpg',
      'D:/code/Ambassadeur-site/Ambassadeur-site/src/assets/images/2.jpg'],

  }
];


