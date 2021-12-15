import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Company } from '../models/Company';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { IPO } from '../models/IPO';

//const BACKEND_URL = environment.apiUrl + '/company-service/companies/';

@Injectable({providedIn: 'root'})
export class CompanyService {
  /*
  updateCompany(id: number | undefined, company: Company) {
    throw new Error('Method not implemented.');
  }*/

  private url = "http://localhost:8082/company-service/companies";
  
  constructor(private http: HttpClient, private router: Router) {
    //this.url = 'http://companyservice-env.eba-2jpmpvgp.ap-south-1.elasticbeanstalk.com/companies/';
    
  }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.url);
  }
  getCompanyById(id: number): Observable<Company>{
    return this.http.get<Company>(`${this.url}/${id}`);
  }
  getCompanyIpoDetails(id: string): Observable<IPO> {
    return this.http.get<IPO>(this.url + id + "/ipos");
  }

  
  addCompany(company: Company): Observable<Object>{
    return this.http.post(`${this.url}`, company);
  }
  updateCompany(id: number, company: Company): Observable<Object>{
    return this.http.put(`${this.url}`, company);
  }
  
  deleteCompany(id: number): Observable<Object>{
    return this.http.delete(`${this.url}/${id}`);
  }
}

