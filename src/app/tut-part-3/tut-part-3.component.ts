import { Component, OnInit } from '@angular/core';

export class Hero
{
    id:number;
    Name:string;
}

const HEROES: Hero[] = [
  { id: 11, Name: 'Mr. Nice' },
  { id: 12, Name: 'Narco' },
  { id: 13, Name: 'Bombasto' },
  { id: 14, Name: 'Celeritas' },
  { id: 15, Name: 'Magneta' },
  { id: 16, Name: 'RubberMan' },
  { id: 17, Name: 'Dynama' },
  { id: 18, Name: 'Dr IQ' },
  { id: 19, Name: 'Magma' },
  { id: 20, Name: 'Tornado' }
];

@Component({
  selector: 'app-tut-part-3',
  templateUrl: './tut-part-3.component.html',
  styleUrls: ['./tut-part-3.component.css']
})


export class TutPart3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  heroess = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
