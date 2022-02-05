import { Component } from '@angular/core';

export interface Card {
  title: string,
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-basics';

  toggleCard = true;
  
  cards: Card[] = [
    {title: 'Test 1 title', text: 'Card sample'},
    {title: 'Test 2 title', text: 'Card sample 2'}
  ]
  
  toggleCards() {
    this.toggleCard = !this.toggleCard;
  }
}
