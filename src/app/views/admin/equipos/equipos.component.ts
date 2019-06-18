import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.scss']
})
export class EquiposComponent implements OnInit {
  public equipo:any;
  public loading:boolean;
  public protocolo:any;
  public parametro:any;
  constructor(public service: AppService) {
    this.loading=true;
   }
     //listar protocolo 
  public listarProtocolo(){
    this.service.getProtocolos().subscribe(
      result => {console.log(result),this.protocolo=result;
        if(!this.service){
          alert('Error en el servidor');
        }else{  
          this.loading=false;
        }
      } );

  }
  //listar Equipos
  public listarEquipos(){
    this.service.getEquipos().subscribe(
      result=>{console.log(result),this.equipo=result;
        if(!this.service){
          alert('Error en el servidor');
        }else{  
          this.loading=false;
        }
      }
    );
  }
  //listar parametro por grupo
  public listarParametroGrupo(){
    this.service.getParametroGrupo().subscribe(
      result=>{console.log(result),this.parametro=result;
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
    this.listarProtocolo();
    this.listarParametroGrupo();
  }
}
