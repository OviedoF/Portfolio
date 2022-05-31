import { ElementRef, Injectable, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NumberpositionserviceService {

  constructor(private _router:Router) { }

  mainDiv: any;

  setMainDiv(element: ElementRef){
    this.mainDiv = element;
  }

  pageByNumber: number = 0;

  pages: any = {
    0: "",
    1: "/about",
    2: "/projects",
    3: "/contact"
  }

  setPage(toNumber: number, mainDiv?: ElementRef){
    if(toNumber >= 4){
      this.pageByNumber = 0;
    } else if (toNumber < 0){
      this.pageByNumber = 3;
    } else {
      this.pageByNumber = toNumber;
    }

    this._router.navigate([this.pages[this.pageByNumber]]);
  }
}
