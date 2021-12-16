import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { CreateCompanyComponent } from './components/companies/create-company/create-company.component';
import { UpdateCompanyComponent } from './components/companies/update-company/update-company.component';
import { ComparisonChartsComponent } from './components/comparison-charts/comparison-charts.component';
import { HomeComponent } from './components/home/home.component';
import { ImportExcelComponent } from './components/import-excel/import-excel.component';
import { CreateIpoComponent } from './components/ipos/create-ipo/create-ipo.component';
import { IposComponent } from './components/ipos/ipos.component';
import { UpdateIpoComponent } from './components/ipos/update-ipo/update-ipo.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CreateSectorComponent } from './components/sectors/create-sector/create-sector.component';
import { SectorsComponent } from './components/sectors/sectors.component';
import { UpdateSectorComponent } from './components/sectors/update-sector/update-sector.component';
import { CreateStockExchangeComponent } from './components/stock-exchange/create-stock-exchange/create-stock-exchange.component';
import { StockExchangeComponent } from './components/stock-exchange/stock-exchange.component';
import { UpdateStockExchangeComponent } from './components/stock-exchange/update-stock-exchange/update-stock-exchange.component';
import { CreateStockPriceComponent } from './components/stock-price/create-stock-price/create-stock-price.component';
import { StockPriceComponent } from './components/stock-price/stock-price.component';
import { UpdateStockPriceComponent } from './components/stock-price/update-stock-price/update-stock-price.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCompanyComponent,
    CompaniesComponent,
    HomeComponent,
    NavbarComponent,
    UpdateCompanyComponent,
    CreateIpoComponent,
    UpdateIpoComponent,
    IposComponent,
    SectorsComponent,
    CreateSectorComponent,
    UpdateSectorComponent,
    StockExchangeComponent,
    CreateStockExchangeComponent,
    UpdateStockExchangeComponent,
    ImportExcelComponent,
    ComparisonChartsComponent,
    StockPriceComponent,
    CreateStockPriceComponent,
    UpdateStockPriceComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
