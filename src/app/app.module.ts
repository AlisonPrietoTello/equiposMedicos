import { OrdentrabajoComponent } from './views/ordenTrabajo/ordentrabajo.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { AppService } from './app.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';
import {MatInputModule} from '@angular/material/input';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import {DropdownModule} from 'primeng/dropdown';
import { MatFormFieldModule, MatSelectModule, MatCheckboxModule, MatPaginatorModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, MatSlideToggleModule } from '@angular/material';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import {MatTableModule} from '@angular/material/table';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/search';
import { CdkTableModule } from '@angular/cdk/table';
import { CotizacionesComponent } from './views/cotizaciones/cotizaciones.component';
import { CotizarComponent } from './views/cotizaciones/cotizar/cotizar.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    DropdownModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    NgxMatSelectSearchModule,
    ReactiveFormsModule,
    MatTableModule,
    MatCheckboxModule,
    CdkTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSlideToggleModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    FilterPipe,
    CotizacionesComponent,
    CotizarComponent,
    OrdentrabajoComponent
  ],
  providers: [AppService, {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
