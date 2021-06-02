import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../Interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey:string = "Poo1bc71B3O4VFizQ5vghbxXj3Em1K13";
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];
  public resultados: Gif[] = [];

  constructor(private http:HttpClient) { 
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('ultimoResultado')!) || [];
  }
  
  get historial(){
    return [...this._historial];
  }

  buscarGifs(query: string){
    
    if (!this._historial.includes(query.trim().toLowerCase())){
      this._historial.unshift(query.trim().toLowerCase());
      this._historial = this.historial.splice(0, 10);

      localStorage.setItem('historial' , JSON.stringify(this._historial));
    }

    const params = new HttpParams()
        .set('api_key', this.apiKey)
        .set('limit', '10')
        .set('q',query);

    console.log(params.toString());

    this.http.get<SearchGifsResponse>(`${this.serviceUrl}/search`, {params})
    .subscribe((resp )=> {
      console.log(resp.data);
      this.resultados = resp.data;
      localStorage.setItem('ultimoResultado' , JSON.stringify(this.resultados));
    });
    
    
  }
}
