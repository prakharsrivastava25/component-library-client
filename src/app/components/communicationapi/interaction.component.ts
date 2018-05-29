import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.css']
})
export class InteractionComponent implements OnInit {

//  options for card one
  cardPropertiesOne = {
    'cardTitle': 'Card 1',
    'cardText': 'Text for card 1.',
    'buttonText': 'C1-button'
  };
  cardPropertiesTwo = {
    'cardTitle': 'Card 2',
    'cardText': 'Text for card 2.',
    'buttonText': 'C2-button'
  };

  // temporary variable for holding two different instances of av-card
  cardInstanceOne;
  cardInstanceTwo;

  constructor() { }

  ngOnInit() {
  }

  cardValueChange(event) {
    console.log('cardValueChange: ', event);
    if (event === 'Card 1') {
      console.log('this.cardInstanceTwo: ', this.cardInstanceTwo);
      this.cardInstanceTwo.callChangeButtonText('changed!!');
    }
  }

  // card property recieved
  cardPropRecieved(event) {
    // console.log('card properties:', event);
    if (event.cardProperty.cardTitle === 'Card 1') {
      this.cardInstanceOne = event;
    } else if (event.cardProperty.cardTitle === 'Card 2') {
      this.cardInstanceTwo = event;
    }
  }

}
