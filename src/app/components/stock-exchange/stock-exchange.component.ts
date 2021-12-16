import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockExchange } from 'src/app/models/StockExchange';
import { StockExchangeService } from 'src/app/services/stock-exchange.service';

@Component({
  selector: 'app-stock-exchange',
  templateUrl: './stock-exchange.component.html',
  styleUrls: ['./stock-exchange.component.css']
})
export class StockExchangeComponent implements OnInit {
  stockExchanges: StockExchange[] | undefined;

  constructor(private stockExchangeService: StockExchangeService , private router: Router) { }

  ngOnInit(): void {
    this.getStockExchanges();
  }

  private getStockExchanges(){
    this.stockExchangeService.getStockExchange().subscribe(data => {
      this.stockExchanges = data;
    });
  }

   
  updateStockExchange(id: number){
    this.router.navigate(['update-stockExchange', id]);
  }



  deleteStockExchange(id: number){
    this.stockExchangeService.deleteStockExchange(id).subscribe( data => {
      console.log(data);
      this.getStockExchanges();
    })
  }
}
