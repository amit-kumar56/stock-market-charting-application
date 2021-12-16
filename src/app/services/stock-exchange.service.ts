import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Company } from '../models/Company';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { StockExchange } from '../models/StockExchange';

//const BACKEND_URL = environment.apiUrl + '/stock-exchange-service/stockExchanges/';

@Injectable({providedIn: 'root'})
export class StockExchangeService {

  private url = "http://localhost:8085/stockExchanges";

  constructor(private http: HttpClient, private router: Router) {
    //this.url = 'http://stockexchangeservice-env.eba-a8uhry6b.ap-south-1.elasticbeanstalk.com/stockExchanges';
  }

  getStockExchange(): Observable<StockExchange[]> {
    return this.http.get<StockExchange[]>(this.url);
  }

  getStockExchanges(id: string): Observable<StockExchange> {
    return this.http.get<StockExchange>(this.url + id);
  }
  getStockExchangeById(id: number): Observable<StockExchange>{
    return this.http.get<StockExchange>(`${this.url}/${id}`);
  }
  addStockExchange(stockExchange: StockExchange): Observable<Object>{
    return this.http.post(`${this.url}`, stockExchange);
  }
  updateStockExchange(id: number, stockExchange: StockExchange): Observable<Object>{
    return this.http.put(`${this.url}`, stockExchange);
  }
  
  deleteStockExchange(id: number): Observable<Object>{
    return this.http.delete(`${this.url}/${id}`);
  }
}

