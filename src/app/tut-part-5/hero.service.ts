import { Injectable } from '@angular/core';

import { HEROES } from './mock-heroes';

export class Hero
{
    id:number;
    Name:string;
}

@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
      }
    
      // See the "Take it slow" appendix
      getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
          // Simulate server latency with 2 second delay
          setTimeout(() => resolve(this.getHeroes()), 2000);
        });
      }
}