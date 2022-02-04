import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent  {

  get historial() : string[]{
    return this.GifsService.historial;
  }

  buscar(reg : string) : void{
    this.GifsService.buscarGifs(reg);
  }
  constructor(private GifsService : GifsService) { 

  }

}
