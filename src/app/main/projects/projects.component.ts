import { Component, OnInit } from '@angular/core';
import data from '../../../assets/projects.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  
  projectActive = data[1];
  projectBackground = `url("${this.projectActive.imgUrl}")`;

  projectsArray: any[] = [];

  setProjectActive = (e:Event) => {
    const target = (<HTMLElement>e.target);
    this.projectActive = (this.projectsArray.filter(el => el.id === target.id))[0];
    this.projectBackground = `url("${this.projectActive.imgUrl}")`;
  }
  constructor() { }

  ngOnInit(): void {
    this.projectsArray = data;
  }

}
