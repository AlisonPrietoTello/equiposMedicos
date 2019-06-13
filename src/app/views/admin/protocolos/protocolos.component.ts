import { Component, OnIni, OnDestroy, OnInit } from '@angular/core';
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
  //paginador
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(public service: AppService) {
    this.loading = true;
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
  ngOnInit() {
    this.listarProtocolo();
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
