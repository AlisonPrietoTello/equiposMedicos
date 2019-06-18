import { AppService } from './../../app.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/components/common/selectitem';
import {SelectItemGroup} from 'primeng/api';

@Component({
  selector: 'app-cotizar',
  templateUrl: './cotizar.component.html',
  styleUrls: ['./cotizar.component.scss']
})
export class CotizarComponent implements OnInit {
  clientes: any;
  clienteSelected: any;
  dtTrigger: Subject<any> = new Subject();
  constructor(private service: AppService) {
    this.estado = 'Listar';

  }

  ngOnInit() {
    this.service.getClientes().subscribe(
      data => {
        this.clientes = data;
        console.log(data);
      }
    );
    this.listarCotizaciones();
  }

  

  public cotizaciones: any;
  public palabra_busqueda: String;
  public estado: String;

// Modal
abrirModal() {
  this.service.abrirModal();
}
cerrarModal() {
  this.service.cerrarModal();
}

  //listar Cotizaciones 
  public listarCotizaciones() {
  this.service.getCotizaciones().subscribe(
    result => {
      this.cotizaciones = result,
        this.dtTrigger.next();
    });

}

}