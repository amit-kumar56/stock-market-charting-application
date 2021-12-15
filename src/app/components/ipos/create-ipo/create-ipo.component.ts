import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPO } from 'src/app/models/IPO';
import { IpoService } from 'src/app/services/ipo.service';

@Component({
  selector: 'app-create-ipo',
  templateUrl: './create-ipo.component.html',
  styleUrls: ['./create-ipo.component.css']
})
export class CreateIpoComponent implements OnInit {
  ipo: IPO  = new IPO();
  constructor(private ipoService: IpoService,
              private router: Router) { }

  ngOnInit(): void {
  }

  saveIpo(){
    console.log("amit");
    return this.ipoService.addIpo(this.ipo).subscribe(data => {
      console.log(data);
      this.goToIpoList();
    },
      (error: any) => console.log(error));
  }
  goToIpoList(){
    this.router.navigate(['/ipos']);
  }

  onSubmit(){
    console.log(this.ipo);
    this.saveIpo();
  }
}
