import { Component, OnInit } from '@angular/core';

import { Company } from '../../../models/Company';
import { CompanyService } from 'src/app/services/company.service';
import { Router } from '@angular/router';
//import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {
  company: Company  = new Company();
  constructor(private companyService: CompanyService,
              private router: Router) { }

  ngOnInit(): void {
  }

  saveCompany(){
    console.log("amit");
    return this.companyService.addCompany(this.company).subscribe(data => {
      console.log(data);
      this.goToCompanyList();
    },
      (error: any) => console.log(error));
  }
  goToCompanyList(){
    this.router.navigate(['/companies']);
  }

  onSubmit(){
    console.log(this.company);
    this.saveCompany();
  }
}
