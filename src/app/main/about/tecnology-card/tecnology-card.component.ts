import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tecnology-card',
  templateUrl: './tecnology-card.component.html',
  styleUrls: ['./tecnology-card.component.scss']
})
export class TecnologyCardComponent implements OnInit {
  @Input() habilityToCard: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
