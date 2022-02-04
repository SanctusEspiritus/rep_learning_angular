import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './card.component.html',
    selector: 'app-card',
    styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit{
    
    title = 'Doom Slayer';
    text = 'rip and tear';
    number = 42;
    array = [1, 1, 2, 4, 6, 9];

    imgSrcUrl = 'https://www.freeiconspng.com/uploads/img-landscape-photo-photography-picture-icon-12.png';

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
}