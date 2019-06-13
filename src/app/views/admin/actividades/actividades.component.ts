import { Component, OnInit, OnDestroy} from '@angular/core';
import { AppService } from '../../../app.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.scss']
})
export class ActividadesComponent implements OnInit, OnDestroy {
  //paginador
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  public protocolo:any;
  public actividad:any;
  public estado:string;
  public loading:boolean;

  constructor( public service: AppService) { 
    this.estado='proto';
    this.loading=true;
  }

  ngOnInit() {
   this.listarProtocolo();
   this.dtOptions = {
    pagingType: 'full_numbers',
    pageLength: 5
  };
  }

  //listar protocolo 
  public listarProtocolo(){
    this.service.getProtocolos().subscribe(
      result => {console.log(result),this.protocolo=result,
        this.dtTrigger.next();
        if(!this.service){
          alert('Error en el servidor');
        }else{  
          this.loading=false;
        }
      } );

  }
  //listar actividad por protocolo
  public listarActividad(id){
    this.service.getActividadesPorProtocolos(id).subscribe(
      data =>{console.log(data),this.actividad=data,this.dtTrigger.next();
        if(!this.service){
          alert('Error en el servidor');
        }else{
          this.loading=false;
        }
      }
    )
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
