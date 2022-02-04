import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { Gif } from '../interfaces/gifs.interfaces';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html'
})
export class ResultadosComponent  {

  get resultados () : Gif[]{
    return this.GifsService.resultados;
  }

  constructor(private GifsService : GifsService) { }

}