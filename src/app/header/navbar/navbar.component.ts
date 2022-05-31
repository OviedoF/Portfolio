import { Component, OnInit } from '@angular/core';
import { NumberpositionserviceService } from 'src/app/numberpositionservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _positionService:NumberpositionserviceService) { }

  redirectToPage(number: number){
    this._positionService.setPage(number);
  }

  ngOnInit(): void {
  }

}
