import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../../../app.service';
import { Subject } from 'rxjs';
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
  //paginador
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(public service: AppService) {
    this.loading = true;
  }
  //listar clientes
  public listarClientes() {
    this.service.getTerceros().subscribe(
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
}
