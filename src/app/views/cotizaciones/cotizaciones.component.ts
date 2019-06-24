import { AppService } from './../../app.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/components/common/selectitem';
import { SelectItemGroup } from 'primeng/api';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { FormGroup } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-cotizaciones',
  templateUrl: './cotizaciones.component.html',
  styleUrls: ['./cotizaciones.component.scss']
})
export class CotizacionesComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  cotizaciones: any;

   data: any;
   list: any;

  public dataSource = new MatTableDataSource<any>(this.data);

  public loading: boolean;

  public displayedColumns: string[] = ['select', 'Cliente', 'CodigoCotizacion', 'Vigencia', 'MetodoPago', 'fechaEntrega', 'TipoServicio', 'Calibracion', 'Cantidad', 'Valor', 'Responsable', 'Estado'];

  public selection = new SelectionModel<any>(true, []);


  constructor(private service: AppService) {
    this.estado = 'Listar';
    this.loading = true;
  }

  ngOnInit(): void {
    this.service.getCotizacionDetalle().subscribe(
      data => { /* console.log(data); */
        this.list = data;
        this.dataSource = new MatTableDataSource<any>(this.list);
        this.dataSource.paginator = this.paginator;
        if (!this.service) {
          alert('Error en el servidor');
        } else {
          this.loading = false;
        }
      },
      error => { console.log(error) }
    );
  }

  public palabra_busqueda: String = "";
  public estado: String;


/*   // Get Cotizaciones
  public getCotizaciones() {

  } */
  


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }


}
