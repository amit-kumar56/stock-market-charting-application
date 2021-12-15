import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPO } from 'src/app/models/IPO';
import { IpoService } from 'src/app/services/ipo.service';

@Component({
  selector: 'app-ipos',
  templateUrl: './ipos.component.html',
  styleUrls: ['./ipos.component.css']
})
export class IposComponent implements OnInit {

  ipos: IPO[] | undefined;

  constructor(private ipoService: IpoService , private router: Router) { }

  ngOnInit(): void {
    this.getIpo();
  }

  private getIpo(){
    this.ipoService.getIpos().subscribe(data => {
      this.ipos = data;
    });
  }

   
  updateIpo(id: number){
    this.router.navigate(['update-ipo', id]);
  }



  deleteIpo(id: number){
    this.ipoService.deleteIpo(id).subscribe( data => {
      console.log(data);
      this.getIpo();
    })
  }


}
