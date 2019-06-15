import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActividadesComponent } from './actividades/actividades.component';
import { ProtocolosComponent } from './protocolos/protocolos.component';
import { InstrumentoComponent } from './instrumento/instrumento.component';
import { EquiposComponent } from './equipos/equipos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { AppService } from '../../app.service';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { FilterPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';

export const routes = [
  { path: '', component: ActividadesComponent, pathMatch: 'full' },
  { path: 'actividades', component: ActividadesComponent, data: { breadcrumb: 'Actividades' }},
  { path: 'protocolos', component: ProtocolosComponent, data: { breadcrumb: 'Protocolos' }},
  { path: 'instrumentos', component: InstrumentoComponent, data: { breadcrumb: 'Instrumentos' }},
  { path: 'equipos', component: EquiposComponent, data: { breadcrumb: 'Equipos' }},
  { path: 'clientes', component: ClientesComponent, data: { breadcrumb: 'Clientes' }}
];

@NgModule({
  declarations: [
  ActividadesComponent,
  ProtocolosComponent,
  InstrumentoComponent,
  EquiposComponent,
  ClientesComponent,
  FilterPipe],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    DataTablesModule,
    FormsModule
  ],
  providers:[]
})
export class AdminModule { }
