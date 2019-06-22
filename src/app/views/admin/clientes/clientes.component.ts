import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { AppService } from '../../../app.service';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2'
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({ transform: 'translateX(100%)', opacity: 0 }),
          animate('300ms', style({ transform: 'translateX(0)', opacity: 1 }))
        ]),
        transition(':leave', [
          style({ transform: 'translateX(0)', opacity: 1 }),
          animate('300ms', style({ transform: 'translateX(100%)', opacity: 0 }))
        ])
      ]
    )
  ],
})
export class ClientesComponent implements OnInit, OnDestroy {
  //variables
  public loading: boolean;
  public cliente: any;
  public clienten:any;
  //input
  @Input()
  public nombre:string;
  @Input()
  public documento:any;
  @Input()
  public nombrec:any;
  @Input()
  public direccion:any;
  @Input()
  public telefono:any;
  @Input()
  public telefonoc:any;
  @Input()
  public email:any;
  @Input()
  public ciudad:any;
  @Input()
  public atencion:any;


  //paginador
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(public service: AppService) {
    this.loading = true;
  }
  //listar clientes
  public listarClientes() {
    this.service.getClientes().subscribe(
      result => {
        console.log(result), this.cliente = result, this.dtTrigger.next();
        if (!this.service) {
          alert('Error en el servidor');
        } else {
          this.loading = false;
        }
      }
    );
  }
  //Agregar nuevo cliente
  public agregarCliente(){
    this.clienten={
      "nombre": this.nombre,
      "nombreCorto": this.nombrec,
      "documento":this.documento,
      "telefonoFijo":this.telefono,
      "telefonoCelular": this.telefonoc,
      "ciudad": this.ciudad,
      "direccion":this.direccion,
      "email":this.email,
      "atencion":this.atencion
      
    }
    this.service.post('clientes/new',this.clienten).subscribe(
      result=>{console.log(result), this.success('');
        this.listarClientes();}
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
    this.listarClientes();
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  //alertas
  success(titulo: string){
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
  });
  
  Toast.fire({
    type: 'success',
    title: 'Cliente agregado exitosamente!'
  })
  } 
}
