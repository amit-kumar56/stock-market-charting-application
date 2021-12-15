import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/models/Company';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

  public id!: number;
  company: Company = new Company();
  constructor(private companyService: CompanyService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
    this.companyService.getCompanyById(this.id).subscribe(data => {
      this.company = data;
    }, (error: any) => console.log(error));
  }
  
  onSubmit(){
    console.log("amit")
    this.companyService.updateCompany(this.id, this.company).subscribe( data =>{
        this.goToCompanyList();
      }
      , (error: any) => console.log(error));
  }

  goToCompanyList(){
    this.router.navigate(['/companies']);
  }
/*
  saveCompany(){
    console.log("amit");
    return this.companyService.updateCompany(this.route.snapshot.params['id'], this.company).subscribe(data => {
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
  */
}
