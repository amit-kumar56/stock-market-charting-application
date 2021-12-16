import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockExchange } from 'src/app/models/StockExchange';
import { StockExchangeService } from 'src/app/services/stock-exchange.service';

@Component({
  selector: 'app-create-stock-exchange',
  templateUrl: './create-stock-exchange.component.html',
  styleUrls: ['./create-stock-exchange.component.css']
})
export class CreateStockExchangeComponent implements OnInit {
  stockExchange: StockExchange  = new StockExchange();
  constructor(private stockExchangeService: StockExchangeService,
              private router: Router) { }

  ngOnInit(): void {
  }

  saveStockExchange(){
    console.log("amit");
    return this.stockExchangeService.addStockExchange(this.stockExchange).subscribe(data => {
      console.log(data);
      this.goToStockExchangeList();
    },
      (error: any) => console.log(error));
  }
  goToStockExchangeList(){
    this.router.navigate(['/stockExchange']);
  }

  onSubmit(){
    console.log(this.stockExchange);
    this.saveStockExchange();
  }

}
