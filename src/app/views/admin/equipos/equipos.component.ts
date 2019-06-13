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

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(public service: AppService) { }
  public listarEquipos(){
    this.service.getEquipos().subscribe(
      result=>{console.log(result),this.equipo=result,  this.dtTrigger.next();
      }
    )
  }

  ngOnInit() {
    this.listarEquipos();
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
