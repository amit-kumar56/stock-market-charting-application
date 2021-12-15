import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sector } from 'src/app/models/Sector';
import { SectorService } from 'src/app/services/sector.service';

@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.css']
})
export class SectorsComponent implements OnInit {

  sectors: Sector[] | undefined;

  constructor(private sectorService: SectorService , private router: Router) { }

  ngOnInit(): void {
    this.getIpo();
  }

  private getIpo(){
    this.sectorService.getSectors().subscribe(data => {
      this.sectors = data;
    });
  }

   
  updateSector(id: number){
    this.router.navigate(['update-sector', id]);
  }



  deleteSector(id: number){
    this.sectorService.deleteSector(id).subscribe( data => {
      console.log(data);
      this.getIpo();
    })
  }

}
