import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGIFResponse, Gif } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey : string = 'aFuofaaBlRLcgxJI0XrVsEQllmLCPSOz';
  private servicioURL : string = 'https://api.giphy.com/v1/gifs';
  private _historial : string[] = [];
  
  public resultados : Gif[] = []

  

  get historial() {
    return [...this._historial];
  }

  buscarGifs(query : string){

    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '10')
    .set('q', query);
    query = query.trim().toLowerCase();
    if (query == ""){
      return;
    }

    if (!this._historial.includes(query)){
          this._historial.unshift(query);
    }

    localStorage.setItem('historial', JSON.stringify(this._historial));
    this._historial = this._historial.splice(0,10);

    this.http.get<SearchGIFResponse>(`${this.servicioURL}/search`,{params})
      .subscribe((resp) => {
        console.log(resp.data);
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      });;

  }

  constructor  (private http: HttpClient){
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!, function(k, v):Gif[]{return v}) || [];
  }
}
