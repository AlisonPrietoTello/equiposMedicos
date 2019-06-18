import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AppService } from '../../app.service';


@Component({
  selector: 'app-ordentrabajo',
  templateUrl: './ordentrabajo.component.html',
  styleUrls: ['./ordentrabajo.component.scss']
})
export class OrdentrabajoComponent implements OnInit {
  public loading:boolean;
  public cotizacion:any;
   constructor( public service: AppService) {
    this.loading=true;
    }
  public listarCotizacion(id){
    this.service.getListarCotizacion(id).subscribe( 
      result=>{console.log(result),this.cotizacion=result;
      }
    );
  }
    

  ngOnInit() {
    this.listarCotizacion(1);
  }
    
}
