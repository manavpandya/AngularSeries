import { Component, OnInit , Input } from '@angular/core';

export class Hero
{
    id:number;
    Name:string;
}

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html'
})


export class HeroDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() hero: Hero;
  
}
