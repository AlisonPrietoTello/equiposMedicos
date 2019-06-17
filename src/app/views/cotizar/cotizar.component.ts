import { AppService } from './../../app.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cotizar',
  templateUrl: './cotizar.component.html',
  styleUrls: ['./cotizar.component.scss']
})
export class CotizarComponent implements OnInit {

  dtTrigger: Subject<any> = new Subject();
  public cotizaciones:any;

  constructor(private service: AppService, private router: Router) { }

  ngOnInit() {
    this.listarCotizaciones();
  }

  // Modal
  abrirModal() {
    this.service.abrirModal();
  }
  cerrarModal() {
    this.service.cerrarModal();
  }

  // Tabla
  getCotizaciones() {

  }
  
  

  //listar Cotizaciones 
  public listarCotizaciones() {
  this.service.getCotizaciones().subscribe(
    result => {
      console.log(result), this.cotizaciones = result,
      this.dtTrigger.next();
    });

}

}