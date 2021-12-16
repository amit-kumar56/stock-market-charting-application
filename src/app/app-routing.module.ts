import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesComponent } from './components/companies/companies.component';
import { CreateCompanyComponent } from './components/companies/create-company/create-company.component';
import { UpdateCompanyComponent } from './components/companies/update-company/update-company.component';
import { ComparisonChartsComponent } from './components/comparison-charts/comparison-charts.component';
import { HomeComponent } from './components/home/home.component';
import { ImportExcelComponent } from './components/import-excel/import-excel.component';
import { CreateIpoComponent } from './components/ipos/create-ipo/create-ipo.component';
import { IposComponent } from './components/ipos/ipos.component';
import { UpdateIpoComponent } from './components/ipos/update-ipo/update-ipo.component';
import { CreateSectorComponent } from './components/sectors/create-sector/create-sector.component';
import { SectorsComponent } from './components/sectors/sectors.component';
import { UpdateSectorComponent } from './components/sectors/update-sector/update-sector.component';
import { CreateStockExchangeComponent } from './components/stock-exchange/create-stock-exchange/create-stock-exchange.component';
import { StockExchangeComponent } from './components/stock-exchange/stock-exchange.component';
import { UpdateStockExchangeComponent } from './components/stock-exchange/update-stock-exchange/update-stock-exchange.component';
import { CreateStockPriceComponent } from './components/stock-price/create-stock-price/create-stock-price.component';
import { StockPriceComponent } from './components/stock-price/stock-price.component';
import { UpdateStockPriceComponent } from './components/stock-price/update-stock-price/update-stock-price.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'companies', component: CompaniesComponent},
  {path: 'create-company', component: CreateCompanyComponent},
  {path: 'update-company/:id', component: UpdateCompanyComponent},
  {path: 'ipos', component: IposComponent},
  {path: 'create-ipo', component: CreateIpoComponent},
  {path: 'update-ipo/:id', component: UpdateIpoComponent},
  {path: 'sectors', component: SectorsComponent},
  {path: 'create-sector', component: CreateSectorComponent},
  {path: 'update-sector/:id', component: UpdateSectorComponent},
  {path: 'stockExchange', component: StockExchangeComponent},
  {path: 'create-stockExchange', component: CreateStockExchangeComponent},
  {path: 'update-stockExchange/:id', component: UpdateStockExchangeComponent},
  {path: 'import-excel', component: ImportExcelComponent},
  {path: 'comparison-charts', component: ComparisonChartsComponent},
  {path: 'stockPrice', component: StockPriceComponent},
  {path: 'create-stockPrice', component: CreateStockPriceComponent},
  {path: 'update-stockPrice/:id', component: UpdateStockPriceComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
