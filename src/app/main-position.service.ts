import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainPositionService {

  positionNumber: number = 0;

  handleCarrousel(e:Event){
    const target = (<HTMLElement>e.target);
    console.log(target);

    if (target.id === 'righto') {
      this.positionNumber += 100;
    } else if (target.id === 'lefto'){
      this.positionNumber -= 100;
    }

    return `-${this.positionNumber}%`
  }

  constructor() { }
}
