import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NumberpositionserviceService } from '../numberpositionservice.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @ViewChild('carrousel_container') mainContainer: any;

  constructor(private _positionService:NumberpositionserviceService, private _renderer2:Renderer2) { 
  }

  async redirectToNextPage(){
    const toPage = this._positionService.pageByNumber + 1;

    setTimeout(() => {
      this._positionService.setPage(toPage, this.mainContainer);
    }, 900);

    console.log(this._positionService.mainDiv);

    this._renderer2.setStyle(this.mainContainer.nativeElement, 'animation', 'chau 0.9s ease-in');

    setTimeout(() => {
      this._renderer2.setStyle(this.mainContainer.nativeElement, 'animation', 'hola 1s ease-in')
    }, 900);
  }

  redirectToPreviousPage(){
    const toPage = this._positionService.pageByNumber - 1;

    this._positionService.setPage(toPage, this.mainContainer);
  }

  ngOnInit(): void {
  }

}
