import { Injectable } from '@angular/core';
import { GLOBAL } from './global';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduccionPlayerasService {

  private url:string;
  constructor(private _http:HttpClient) { 
    this.url=GLOBAL.url
   }

   getDatos(){
    console.log(this.url)
    return firstValueFrom(this._http.get(this.url + 'ProduccionPlayeras'))
   }
}
