import { Component, OnInit } from '@angular/core';
import data from '../../../assets/tecnologies.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  
  active: any = {};

  setActive(e:Event){
    const target = (<HTMLElement>e.target);
    this.active = (data.filter(el => el.name === target.id))[0];
  }

  constructor() { }

  ngOnInit(): void {
    this.active = (data.filter(el => el.name === "html5"))[0];
  }

}
