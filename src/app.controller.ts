import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
} from '@nestjs/common';

import { AppService } from './app.service';
import { Hero } from './hero';

@Controller('heroes')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHeroesSearched(@Query('name') query: any): Hero[] {
    if (!query) {
      return this.appService.getHeroes();
    }
    return this.appService.getHeroesSearched(query);
  }

  @Get(':id')
  getHeroById(@Param('id') id: string): any {
    return this.appService.getHeroById(+id);
  }

  @Post()
  addHero(@Body('name') heroName: string) {
    return this.appService.addHero(heroName);
  }

  @Delete(':id')
  deleteHero(@Param('id') id: string): any {
    return this.appService.deletHero(+id);
  }

  @Put()
  updateHero(@Body() hero: Hero) {
    return this.appService.updateHero(hero);
  }
}
