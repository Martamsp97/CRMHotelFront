import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { lastValueFrom } from 'rxjs';
import { Usuario } from '../interfaces/usuario.interfaces';

type LoginBody = { email: string, password: string };
type ResponseLogin = { message: string, token: string };

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private httpClient = inject(HttpClient);

  private url: string = `${environment.apiUrl}/usuarios`;

  login(body: LoginBody) {
    return lastValueFrom(
      this.httpClient.post<ResponseLogin>
        (`${this.url}/login`, body));
  }

  registro(body: Usuario): Promise<Usuario> {
    return lastValueFrom(
      this.httpClient.post<Usuario>(`${this.url}/registro`, body)
    )
  }
}
