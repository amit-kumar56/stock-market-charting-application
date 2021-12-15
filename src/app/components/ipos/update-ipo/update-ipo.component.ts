import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPO } from 'src/app/models/IPO';
import { IpoService } from 'src/app/services/ipo.service';

@Component({
  selector: 'app-update-ipo',
  templateUrl: './update-ipo.component.html',
  styleUrls: ['./update-ipo.component.css']
})
export class UpdateIpoComponent implements OnInit {

  public id!: number;
  ipo: IPO = new IPO();
  constructor(private ipoService: IpoService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
    this.ipoService.getIpoById(this.id).subscribe(data => {
      this.ipo = data;
    }, (error: any) => console.log(error));
  }
  
  onSubmit(){
    console.log("amit")
    this.ipoService.updateIpo(this.id, this.ipo).subscribe( data =>{
        this.goToIpoList();
      }
      , (error: any) => console.log(error));
  }

  goToIpoList(){
    this.router.navigate(['/ipos']);
  }
}
