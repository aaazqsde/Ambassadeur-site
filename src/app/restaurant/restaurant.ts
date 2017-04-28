export class Restaurant {

  id: number;
  nom: string;
  type?: [string];
  ambiance: string;
  service: string;
  description: string;
  commentaires?: [{
    pseudo: string,
    keyword: string,
    date: string,
    description: string,
    note: number
  }];
  ouvert: boolean;
  horaires?: {
    lundi: [{from: number, to: number}],
    mardi: [{from: number, to: number}],
    mercredi: [{from: number, to: number}],
    jeudi: [{from: number, to: number}],
    vendredi: [{from: number, to: number}],
    samedi: [{from: number, to: number}],
    dimanche: [{from: number, to: number}]
  };
  images?: [string];
  coordinates?: [{lat: number, long: number}];



}
