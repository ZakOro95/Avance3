import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProduccionPlayerasService } from 'src/app/services/produccion-playeras.service';
import { objetoPlayeras } from '../objetoplayeras';

@Component({
  selector: 'app-pro-elite',
  templateUrl: './pro-elite.component.html',
  styleUrls: ['./pro-elite.component.css'],
  
})
export class ProEliteComponent implements OnInit {
  public Base: any;

  public objetoplayeras= new objetoPlayeras;

  constructor(private _serviceProduccion:ProduccionPlayerasService){}
  ngOnInit(): void {
    // this.getDatos()
    
  }

  mandar() {
    this._serviceProduccion.mandar(this.objetoplayeras)
    .then(response=>{
      alert("Datos Guardados");
      this.objetoplayeras= new objetoPlayeras;
    })
    .catch(error=>{
      console.log(error)
    })
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
