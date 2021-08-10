import { UsuarioService } from './usuario/usuario.service';
import { Injectable } from '@angular/core';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private http: HttpClient, private usuarioService: UsuarioService) { }

  autenticar(usuario: string, senha: string): Observable<HttpResponse<any>>{
    return this.http.post('http://localhost:3000/user/login', {userName: usuario, password: senha},
    {observe: 'response'});
  }

}
