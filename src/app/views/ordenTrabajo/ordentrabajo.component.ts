import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AppService } from '../../app.service';


@Component({
  selector: 'app-ordentrabajo',
  templateUrl: './ordentrabajo.component.html',
  styleUrls: ['./ordentrabajo.component.scss']
})
export class OrdentrabajoComponent implements OnInit {
  public loading:boolean;
   constructor( public service: AppService) {
    this.loading=true;
    }
  
    

  ngOnInit() {
  }
    
}
