import { Component, OnInit, Input } from '@angular/core';
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
  public equipon:any;
  //input
  @Input()
  public codigo:any;
  @Input()
  public referencia:any;
  @Input()
  public nombre:any;
  @Input()
  public fkProtocolo:any;
  @Input()
  public fktipo:any;


  constructor(public service: AppService) {
    this.loading=true;
   }
     //listar protocolo 
  public listarProtocolo(){
    this.service.getProtocolos().subscribe(
      result => {console.log(result),this.protocolo=result;
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
  //Agregar nuevo equipo 
  public agregarEquipo(){
    this.equipon={
      "nombre":this.nombre,
      "codigo":this.codigo,
      "referencia":this.referencia,
      "fkProtocolo":this.fkProtocolo,
      "fkTipo":this.fktipo
    } 
    this.service.post('equipos/new', this.equipon).subscribe(
      result=>{console.log(result)
        this.listarEquipos();
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
