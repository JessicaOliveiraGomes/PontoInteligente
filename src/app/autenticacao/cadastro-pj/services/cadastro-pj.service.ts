import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { CadastroPj } from '../models';

@Injectable()
export class CadastroPjService {

  private readonly PATH: string = 'cadastrar-pj';

  constructor(private http: HttpClient) { }

  cadastrar(cadastroPj: CadastroPj): Observable<any> {
    return this.http.post(env.baseApiUrl + this.PATH, cadastroPj);
  }
}
