import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent{

  constructor(private GifsService: GifsService) { }

  get historial(){
    return this.GifsService.historial;
  }

  buscar(query: string){
    this.GifsService.buscarGifs(query);
  }

}
