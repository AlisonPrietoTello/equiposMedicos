import { AppService } from './../../app.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/components/common/selectitem';
import {SelectItemGroup} from 'primeng/api';
import { MatTableDataSource, MatPaginator  } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cotizar',
  templateUrl: './cotizar.component.html',
  styleUrls: ['./cotizar.component.scss']
})

export class CotizarComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  clientes: any;
  selection = new SelectionModel<any>(true, []);
  dtTrigger: Subject<any> = new Subject();
  public data:any;
  public list:any;
  public loading:boolean;
  public dataSource = new MatTableDataSource<any>(this.data);
  public displayedColumns: string[] = ['select', 'codigo', 'nombre'];
  constructor(private service: AppService) {
    this.estado = 'Listar';
    this.loading = true;
  }




  ngOnInit(): void {
    this.service.getClientes().subscribe(
      data => {
        this.clientes = data;
        console.log(data);
      }
    );
    this.service.getEquipos().subscribe(
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
        error => { console.log(error)}
      );
    this.listarCotizaciones();
  }

  public cotizaciones: any;
  public palabra_busqueda: String ="";
  public estado: String;

// Modal
abrirModal() {
  this.service.abrirModal();
}
cerrarModal() {
  this.service.cerrarModal();
}

  //listar Cotizaciones 
  public listarCotizaciones() {
  this.service.getCotizaciones().subscribe(
    result => {
      this.cotizaciones = result,
        this.dtTrigger.next();
    });
}

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