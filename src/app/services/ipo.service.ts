import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { IPO } from '../models/IPO';

//const BACKEND_URL = environment.apiUrl + '/company-service/ipos/';

@Injectable({providedIn: 'root'})
export class IpoService {

  private url = "http://localhost:8082/ipo";

  constructor(private http: HttpClient, private router: Router) {
    //this.url = 'http://companyservice-env.eba-2jpmpvgp.ap-south-1.elasticbeanstalk.com/ipos/';
  }

  getIpos(): Observable<IPO[]> {
    return this.http.get<IPO[]>(this.url);
  }

  getIpo(id: string): Observable<IPO> {
    return this.http.get<IPO>(this.url + id);
  }
  getIpoById(id: number): Observable<IPO>{
    return this.http.get<IPO>(`${this.url}/${id}`);
  }
  addIpo(ipo: IPO): Observable<Object>{
    return this.http.post(`${this.url}`, ipo);
  }
  updateIpo(id: number, ipo: IPO): Observable<Object>{
    return this.http.put(`${this.url}`, ipo);
  }
  
  deleteIpo(id: number): Observable<Object>{
    return this.http.delete(`${this.url}/${id}`);
  }
}

