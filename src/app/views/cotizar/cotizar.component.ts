import { AppService } from './../../app.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
<<<<<<< Updated upstream
import { Router } from '@angular/router';
=======
import { SelectItem } from 'primeng/api';
import { SelectItemGroup } from 'primeng/api';
>>>>>>> Stashed changes

@Component({
  selector: 'app-cotizar',
  templateUrl: './cotizar.component.html',
  styleUrls: ['./cotizar.component.scss']
})
export class CotizarComponent implements OnInit {

  dtTrigger: Subject<any> = new Subject();
<<<<<<< Updated upstream
  public cotizaciones:any;

  constructor(private service: AppService, private router: Router) { }

  ngOnInit() {
    this.listarCotizaciones();
  }
=======
  public cotizaciones: any;

  dataClientes: any;
  clienteSeleccionado: string;
  /* grupoClientes: SelectItemGroup[]; */
  grupoClientes: any;

  constructor(private service: AppService) {
    this.service.getClientes().subscribe(
      data => {
        this.dataClientes = data;
          for (let index = 0; index < this.dataClientes.length; index++) {
            this.grupoClientes[index] = this.dataClientes[index].nombre;
            console.log(this.grupoClientes[index]);
          }
      }
    );
  }

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
>>>>>>> Stashed changes

// Tabla
getCotizaciones() {

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