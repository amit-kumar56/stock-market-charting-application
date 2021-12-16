import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockPrice } from 'src/app/models/StockPrice';
import { StockPriceService } from 'src/app/services/stock-price.service';

@Component({
  selector: 'app-stock-price',
  templateUrl: './stock-price.component.html',
  styleUrls: ['./stock-price.component.css']
})
export class StockPriceComponent implements OnInit {

  stockPrice: StockPrice[] | undefined;

  constructor(private stockPriceService: StockPriceService , private router: Router) { }

  ngOnInit(): void {
    this.getStockPrice();
  }

  private getStockPrice(){
    this.stockPriceService.getStockPrices().subscribe(data => {
      this.stockPrice = data;
    });
  }

   
  updateStockPrice(id: number){
    this.router.navigate(['update-sector', id]);
  }



  deleteStockPrice(id: number){
    this.stockPriceService.deleteStockPrice(id).subscribe( data => {
      console.log(data);
      this.getStockPrice();
    })
  }


}
