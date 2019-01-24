import { Injectable } from '@angular/core';


export interface ICard {
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class CardService {


  constructor() {}
    getCards():ICard[]{
      return    [
        {
          title: 'card 1',
          content: 'Gee Gee Gee',
        },
        {
          title: 'card 2',
          content: 'Gee Gee Gee',
        
        },
        {
          title: 'card 3',
          content: 'Gee Gee Gee',
        }
      ];
    
    }
}

