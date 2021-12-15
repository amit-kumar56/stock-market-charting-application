import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Company } from '../models/Company';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Sector } from '../models/Sector';

//const BACKEND_URL = environment.apiUrl + '/sector-service/sectors/';

@Injectable({providedIn: 'root'})
export class SectorService {

  private url = "http://localhost:8083/sectors";

  constructor(private http: HttpClient, private router: Router) {
    //this.url = 'http://sectorservice-env.eba-uxpehump.ap-south-1.elasticbeanstalk.com/sectors';
  }

  getSectors(): Observable<Sector[]> {
    return this.http.get<Sector[]>(this.url);
  }

  getSector(id: string): Observable<Sector> {
    return this.http.get<Sector>(this.url + id);
  }
  getSectorById(id: number): Observable<Sector>{
    return this.http.get<Sector>(`${this.url}/${id}`);
  }
  addSector(sector: Sector): Observable<Object>{
    return this.http.post(`${this.url}`, sector);
  }
  updateSector(id: number, sector: Sector): Observable<Object>{
    return this.http.put(`${this.url}`, sector);
  }
  
  deleteSector(id: number): Observable<Object>{
    return this.http.delete(`${this.url}/${id}`);
  }
}

