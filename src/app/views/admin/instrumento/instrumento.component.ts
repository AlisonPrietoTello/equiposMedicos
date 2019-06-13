import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../../../app.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-instrumento',
  templateUrl: './instrumento.component.html',
  styleUrls: ['./instrumento.component.scss']
})
export class InstrumentoComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  public instrumento:any;
   constructor( public service: AppService) {

    }
    public listarInstru(){
      this.service.getInstrumentos().subscribe( 
        result=>{console.log(result),this.instrumento=result,this.dtTrigger.next();
        }
      );
    }
    

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    }
    this.listarInstru();
  }
    ngOnDestroy(): void {
      // Do not forget to unsubscribe the event
      this.dtTrigger.unsubscribe();
    }
}
