import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StockExchange } from 'src/app/models/StockExchange';
import { StockPrice } from 'src/app/models/StockPrice';
import { StockExchangeService } from 'src/app/services/stock-exchange.service';
import { StockPriceService } from 'src/app/services/stock-price.service';

@Component({
  selector: 'app-update-stock-price',
  templateUrl: './update-stock-price.component.html',
  styleUrls: ['./update-stock-price.component.css']
})
export class UpdateStockPriceComponent implements OnInit {

  public id!: number;
  stockPrice: StockPrice = new StockPrice();
  constructor(private stockPriceService: StockPriceService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
    this.stockPriceService.getStockPriceById(this.id).subscribe(data => {
      this.stockPrice = data;
    }, (error: any) => console.log(error));
  }
  
  onSubmit(){
    console.log("amit")
    this.stockPriceService.updateStockPrice(this.id, this.stockPrice).subscribe( data =>{
        this.goToStockPriceList();
      }
      , (error: any) => console.log(error));
  }

  goToStockPriceList(){
    this.router.navigate(['/stockPrice']);
  }

}
