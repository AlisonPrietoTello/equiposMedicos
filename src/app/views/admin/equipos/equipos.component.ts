import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../../../app.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.scss']
})
export class EquiposComponent implements OnInit, OnDestroy {
  public equipo:any;
  public loading:boolean;
  //paginador
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(public service: AppService) {
    this.loading=true;
   }
  //listar Equipos
  public listarEquipos(){
    this.service.getEquipos().subscribe(
      result=>{console.log(result),this.equipo=result,  this.dtTrigger.next();
        if(!this.service){
          alert('Error en el servidor');
        }else{  
          this.loading=false;
        }
      }
    )
  }
    // Modal
    abrirModal() {
      this.service.abrirModal();
    }
    cerrarModal() {
      this.service.cerrarModal();
    }
  ngOnInit() {
    this.listarEquipos();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
