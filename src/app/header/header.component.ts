import { Component, OnInit } from '@angular/core';
import { NumberpositionserviceService } from '../numberpositionservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _positionService:NumberpositionserviceService) { }

  redirectToPage(number: number){
    this._positionService.setPage(number);
  }

  ngOnInit(): void {
  }

}
