import { NovoUsuarioService } from './novo-usuario.service';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {

  constructor(private novoUsuarioService: NovoUsuarioService) { }

  usuarioJaExiste(){
    return( control: AbstractControl ) => {
      control.valueChanges.pipe(
        switchMap(nomeUsuario => this.novoUsuarioService.verificarUsuarioExistente(nomeUsuario)),
        map(usuarioExiste => usuarioExiste ? {usuarioExistente: true} : null),
        first()
      );
    }
  }
}
