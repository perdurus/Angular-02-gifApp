import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  constructor(private GifsService: GifsService) { }

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  buscar(){

    const valor = this.txtBuscar.nativeElement.value;

    console.log("Valor del dato: " + valor.trim().length);
    if (valor.trim().length > 0){
      this.GifsService.buscarGifs(valor);
      this.txtBuscar.nativeElement.value = "";
    }
  }

}
