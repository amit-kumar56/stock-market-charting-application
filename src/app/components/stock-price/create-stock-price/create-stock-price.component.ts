import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockPrice } from 'src/app/models/StockPrice';
import { StockPriceService } from 'src/app/services/stock-price.service';

@Component({
  selector: 'app-create-stock-price',
  templateUrl: './create-stock-price.component.html',
  styleUrls: ['./create-stock-price.component.css']
})
export class CreateStockPriceComponent implements OnInit {
  stockPrice: StockPrice  = new StockPrice();
  constructor(private stockPriceService: StockPriceService,
              private router: Router) { }

  ngOnInit(): void {
  }

  saveSector(){
    console.log("amit");
    return this.stockPriceService.addStockPrice(this.stockPrice).subscribe(data => {
      console.log(data);
      this.goToSectorList();
    },
      (error: any) => console.log(error));
  }
  goToSectorList(){
    this.router.navigate(['/stockPrice']);
  }

  onSubmit(){
    console.log(this.stockPrice);
    this.saveSector();
  }
}
