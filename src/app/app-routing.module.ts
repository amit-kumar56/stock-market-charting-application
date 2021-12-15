import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesComponent } from './components/companies/companies.component';
import { CreateCompanyComponent } from './components/companies/create-company/create-company.component';
import { UpdateCompanyComponent } from './components/companies/update-company/update-company.component';
import { HomeComponent } from './components/home/home.component';
import { CreateIpoComponent } from './components/ipos/create-ipo/create-ipo.component';
import { IposComponent } from './components/ipos/ipos.component';
import { UpdateIpoComponent } from './components/ipos/update-ipo/update-ipo.component';
import { CreateSectorComponent } from './components/sectors/create-sector/create-sector.component';
import { SectorsComponent } from './components/sectors/sectors.component';
import { UpdateSectorComponent } from './components/sectors/update-sector/update-sector.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
