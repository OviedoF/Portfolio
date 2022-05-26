import { Component, OnInit } from '@angular/core';
import { MainPositionService } from '../main-position.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  positionNumber: number = 0; 
  position: string = `-100%`;

  callCarrousel(e:Event){
    this.position = this.positionService.handleCarrousel(e);
    this.positionNumber = this.positionService.positionNumber;
  }

  constructor(private positionService:MainPositionService) { }

  ngOnInit(): void {
  }

}
