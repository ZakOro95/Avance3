import { Component, OnInit } from '@angular/core';
import { ProduccionPlayerasService } from 'src/app/services/produccion-playeras.service';

@Component({
  selector: 'app-pro-elite',
  templateUrl: './pro-elite.component.html',
  styleUrls: ['./pro-elite.component.css'],
  
})
export class ProEliteComponent implements OnInit {
  public Base: any

  constructor(private _serviceProduccion:ProduccionPlayerasService){}
  ngOnInit(): void {
    this.getDatos()
    
  }

  getDatos(){
    this._serviceProduccion.getDatos()
    .then(response=>{
      console.log(response);
      this.Base=response;
      
    })
    .catch(error=>{
      console.log(error)
    })
  }
}
