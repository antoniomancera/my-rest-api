import { Injectable } from '@nestjs/common';

import { Hero } from './hero';

@Injectable()
export class AppService {
  heroes: Hero[] = [
    { id: 1, name: 'Dr Nice' },
    { id: 2, name: 'Narco' },
    { id: 3, name: 'Bombasto' },
    { id: 4, name: 'Celeritas' },
    { id: 5, name: 'Magneta' },
    { id: 6, name: 'RubberMan' },
    { id: 7, name: 'Dynama' },
    { id: 8, name: 'Dr IQ' },
    { id: 9, name: 'Magma' },
    { id: 10, name: 'Tornado' },
  ];

  getHeroes(): Hero[] {
    return this.heroes;
  }

  getHeroesSearched(heroName: string): Hero[] {
    return this.heroes.filter((i) => i.name.includes(heroName));
  }

  getHeroById(heroId: number) {
    return this.heroes.find((i) => i.id === heroId);
  }

  addHero(heroName: string): Hero {
    const newHeroID = this.getId(this.heroes);
    const newHero: Hero = { id: newHeroID, name: heroName };
    this.heroes.push(newHero);
    return newHero;
  }

  deletHero(heroId: number) {
    const heroesFilter = this.heroes.filter((i) => i.id !== heroId);
    this.heroes = heroesFilter;
  }

  updateHero(hero: Hero) {
    const index = this.heroes.findIndex(
      (heroeList) => heroeList.id === hero.id,
    );
    this.heroes[index].name = hero.name;

    return hero;
  }

  private getId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 1;
  }
}
