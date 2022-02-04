import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar !: ElementRef<HTMLInputElement>;
  buscar(){
    const valor = this.txtBuscar.nativeElement.value;
    console.log(valor);

    this.GifsService.buscarGifs(valor);

    this.txtBuscar.nativeElement.value = '';
  }


  constructor ( private GifsService : GifsService){

  }


}
