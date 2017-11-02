import { Component, OnInit } from '@angular/core';

export class Hero
{
    id:number;
    Name:string;
}


@Component({
  selector: 'app-tut-part-2',
  templateUrl: './tut-part-2.component.html',
  styleUrls: ['./tut-part-2.component.css']
})
export class TutPart2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  hero: Hero = {
    id: 1,
    Name: 'Manav Pandya'
  };

}
