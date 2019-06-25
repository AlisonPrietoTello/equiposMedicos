import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Usuario } from '../../services/usuario';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {

  title = 'Equipos Medicos';

  usuario: Usuario;
  
  constructor(private auth: AuthService, private router: Router) {
    this.usuario = new Usuario();
  }

  ngOnInit() {
  }

  login(): void {
    this.auth.login(this.usuario).subscribe(
      response => {
        this.auth.guardarUsuario(response.access_token);
        this.auth.guardarToken(response.access_token);
        const usuario = this.auth.usuario;
        this.router.navigate(['/dashboard']);
        swal.fire('Login', `Hola ${usuario.username}, has iniciado con éxtio`, 'success');
      },
      err => {
        if (err.status === 400) {
          swal.fire('Login', `Usuario o Clave Incorrecta`, 'error');
        }
      }
    );
  }

  

}