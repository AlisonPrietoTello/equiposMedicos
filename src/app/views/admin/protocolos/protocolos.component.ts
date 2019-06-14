import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../../../app.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-protocolos',
  templateUrl: './protocolos.component.html',
  styleUrls: ['./protocolos.component.scss']
})
export class ProtocolosComponent implements OnInit, OnDestroy {

  public protocolo: any;
  public loading: boolean;
  public estado:string;
  public instrumento:any;

  //paginador
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(public service: AppService) {
    this.loading = true;
    this.estado='protocolo';
  }
  //listar protocolo 
  public listarProtocolo() {
    this.service.getProtocolos().subscribe(
      result => {
        console.log(result), this.protocolo = result,
        this.dtTrigger.next();
        if (!this.service) {
          alert('Error en el servidor');
        } else {
          this.loading = false;
        }
      });
  }
  //listar protocolo por id
  public listarProtoco(id){
    this.service.getInstrumentosPorProtocolos(id).subscribe(
      result=>{
        console.log(result),this.instrumento= result,this.dtTrigger.next();
        if (!this.instrumento) {
          alert('Error en el servidor');
        } else {
          this.loading = false;
        }
      });
  }
  ngOnInit() {
    this.listarProtocolo();
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
