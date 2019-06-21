import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AppService } from '../../app.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-ordentrabajo',
  templateUrl: './ordentrabajo.component.html',
  styleUrls: ['./ordentrabajo.component.scss']
})
export class OrdentrabajoComponent implements OnInit {
  public loading:boolean;
  public cotizacion:any;
  public id_cotizacion:any;
   constructor( public service: AppService, private _route: ActivatedRoute) {
       //Obtener id de curso - para contenidos
    console.log(this._route.snapshot.paramMap.get('id'));
    this.id_cotizacion = this._route.snapshot.paramMap.get('id');
    //loading
    this.loading=true;
    }
  
  ngOnInit() {
  }
    
}
