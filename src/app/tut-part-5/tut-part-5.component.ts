import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';

export class Hero
{
    id:number;
    Name:string;
}

@Component({
  selector: 'app-tut-part-5',
  templateUrl: './tut-part-5.component.html',
  styleUrls: ['./tut-part-5.component.css'],
  providers :[HeroService]
})
export class TutPart5Component implements OnInit {
  constructor(private heroService: HeroService) { }
  
  ngOnInit(): void {
    this.getHeroes();
  }

  heroes: Hero[];
  selectedHero: Hero;


  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
