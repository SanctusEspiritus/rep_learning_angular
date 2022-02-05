import { Card } from './../app.component';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    templateUrl: './card.component.html',
    selector: 'app-card',
    styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit{
    
    constructor() {
        this.card = {title: '', text:''}
    }

    @Input() card: Card;

    title: string = 'Doom Slayer';
    text: string = 'rip and tear';
    textColor: string = '';
    number: number = 42;
    array = [1, 1, 2, 4, 6, 9];

    imgSrcUrl: string = 'https://www.freeiconspng.com/uploads/img-landscape-photo-photography-picture-icon-12.png';

    ngOnInit(): void {
        setTimeout(() => {
            this.imgSrcUrl = 'https://pngimg.com/uploads/pokemon/pokemon_PNG129.png';
        }, 2000);
    }

    changeTitle() {
        this.title = 'Punisher';
    }

    onChangeInput(event:any) {
        this.title = event.target.value;
    }
    
    changeText() {
        this.text = 'We will send that'
    }
}