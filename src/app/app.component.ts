import { Component } from '@angular/core';
import { CardService, ICard } from './services/card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // cards: ICard[];

  // constructor(private cardService: CardService){
  //   this.cards = this.cardService.getCards();
  // }



  title = 'gee-demo';
  
 
}