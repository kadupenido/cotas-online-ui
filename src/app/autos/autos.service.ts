import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from './../../environments/environment';

@Injectable()
export class AutosService {

  private baseUrl = environment.baseUrl + '/automoveis';

  constructor(private http: HttpClient) { }

  getCotas() {
    const url = `${this.baseUrl}/`;
    return this.http.get(url);
  }

}
