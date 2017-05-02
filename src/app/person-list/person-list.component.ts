import { Component, OnInit } from '@angular/core';
import { PersonData } from '../person-data';

@Component({
  selector: 'app-person-list',
  template: `
    <ul>
     <li *ngFor = "let star of peopleList">Name:{{star.name}}</li>
    </ul>
  `,
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {
peopleList : PersonData[]= [
{name:'Suresh' , age:30, rating : 4},
{name:'Vincent' , age:28, rating : 3},
{name:'Rupam' , age:31, rating : 5}
];

  constructor() { }

  ngOnInit() {
  }

}
