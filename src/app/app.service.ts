import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP } from './constants';
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
@Injectable({
  providedIn: 'root'
})
export class AppService {
  public url: String = APP.ApiEndpoint;
  constructor(private http: HttpClient) { }
  // @Get actividades 
  public getActividadesPorProtocolos(id: string) {
    return this.http.get(this.url + 'actividades/protocolo/' + id, httpOptions);
  }
  // @Get empresas
  public getEmpresas() {
    return this.http.get(this.url + 'empresa/list', httpOptions);
  }
  // @Get equipos
  public getEquipos() {
    return this.http.get(this.url + 'equipos/list', httpOptions);
  }
  // @Get grupos
  public getGrupos() {
    return this.http.get(this.url + 'grupos/list', httpOptions);
  }
  // @Get instrumentos
  public getInstrumentos() {
    return this.http.get(this.url + 'instrumentos/list', httpOptions);
  }
  // @Get instrumentos por Protocolos
  public getInstrumentosPorProtocolos(id: string) {
    return this.http.get(this.url + 'ip/1/protocolo/' + id, httpOptions);
  }
  // @Get instrumentos -- protocolos
  public getInstrumentosProtocolos() {
    return this.http.get(this.url + 'instrumentos_protocolo/list', httpOptions);
  }
  // @Get parametros
  public getParametros() {
    return this.http.get(this.url + 'parametro/list', httpOptions);
  }
  // @Get protocolos
  public getProtocolos() {
    return this.http.get(this.url + 'protocolos/list', httpOptions);
  }
  // @Get protocolos por Instrumentos
  public getProtocolosPorInstrumento() {
    return this.http.get(this.url + 'ip/1/instrumento/2', httpOptions);
  }
  // @Get terceros
  public getTerceros() {
    return this.http.get(this.url + 'terceros/list', httpOptions);
  }

  // @Get Cotizaciones
  public getCotizaciones() {
    return this.http.get(this.url + 'cotizaciones/list', httpOptions);
  }
  //@Get clientes
  public getCliente(){
    return this.http.get(this.url + 'clientes/list',httpOptions);
  }
  //@Get parametro por grupo
  public getParametroGrupo(){
    return this.http.get(this.url + 'parametro/filtro_empresa_grupo/1/2', httpOptions)
  }
  //@Get Listar cotizacion por id 
  public getListarCotizacion(id: string) {
    return this.http.get(this.url + 'cotizaciones/'.concat(id), httpOptions);
  }
  //Get listar detalles cotizacion por id
  public getListarCotizaciondetalles(id: string) {
    return this.http.get(this.url + 'cotizaciones/1', httpOptions);
  }
  //@Post clientes
  post(ruta: string, body: any){let repos = this.http.post<any>(this.url.concat(ruta), body, httpOptions); 
  return repos;
 }



  // Modal
  modal: boolean = false;
  abrirModal() {
    this.modal = true;
  }
  cerrarModal() {
    this.modal = false;
  }

}
