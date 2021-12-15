import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Company } from '../../models/Company';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  companies: Company[] | undefined;

  constructor(private companyService: CompanyService , private router: Router) { }

  ngOnInit(): void {
    this.getCompany();
  }

  private getCompany(){
    this.companyService.getCompanies().subscribe(data => {
      this.companies = data;
    });
  }

   
  updateCompany(id: number){
    this.router.navigate(['update-company', id]);
  }



  deleteCompany(id: number){
    this.companyService.deleteCompany(id).subscribe( data => {
      console.log(data);
      this.getCompany();
    })
  }

}
