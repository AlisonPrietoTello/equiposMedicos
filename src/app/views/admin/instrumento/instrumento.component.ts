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
  public loading:boolean;
   constructor( public service: AppService) {
    this.loading=true;
    }
    public listarInstru(){
      this.service.getInstrumentos().subscribe( 
        result=>{console.log(result),this.instrumento=result,this.dtTrigger.next();
          if(!this.service){
            alert('Error en el servidor');
          }else{  
            this.loading=false;
          }
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
