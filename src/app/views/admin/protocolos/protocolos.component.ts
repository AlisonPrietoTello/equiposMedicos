import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-protocolos',
  templateUrl: './protocolos.component.html',
  styleUrls: ['./protocolos.component.scss']
})
export class ProtocolosComponent implements OnInit {

  public protocolo: any;
  public loading: boolean;
  public estado:string;
  public instrumento:any;
  public text:string;

  //paginador


  constructor(public service: AppService) {
    this.loading = true;
    this.estado='protocolo';
  }
  //listar protocolo 
  public listarProtocolo() {
    this.service.getProtocolos().subscribe(
      result => {
        console.log(result), this.protocolo = result
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
        console.log(result),this.instrumento= result
        if (!this.instrumento) {
          alert('Error en el servidor');
        } else {
          this.loading = false;
        }
      });
  }
  ngOnInit() {
    this.listarProtocolo();
 
  }
 

}
