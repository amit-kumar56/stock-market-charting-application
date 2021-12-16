import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StockExchange } from 'src/app/models/StockExchange';
import { StockExchangeService } from 'src/app/services/stock-exchange.service';

@Component({
  selector: 'app-update-stock-exchange',
  templateUrl: './update-stock-exchange.component.html',
  styleUrls: ['./update-stock-exchange.component.css']
})
export class UpdateStockExchangeComponent implements OnInit {

  public id!: number;
  stockExchange: StockExchange = new StockExchange();
  constructor(private stockExchangeService: StockExchangeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
    this.stockExchangeService.getStockExchangeById(this.id).subscribe(data => {
      this.stockExchange = data;
    }, (error: any) => console.log(error));
  }
  
  onSubmit(){
    console.log("amit")
    this.stockExchangeService.updateStockExchange(this.id, this.stockExchange).subscribe( data =>{
        this.goToStockExchangeList();
      }
      , (error: any) => console.log(error));
  }

  goToStockExchangeList(){
    this.router.navigate(['/stockExchange']);
  }
}
