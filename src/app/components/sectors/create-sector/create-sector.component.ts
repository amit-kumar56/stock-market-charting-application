import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sector } from 'src/app/models/Sector';
import { SectorService } from 'src/app/services/sector.service';

@Component({
  selector: 'app-create-sector',
  templateUrl: './create-sector.component.html',
  styleUrls: ['./create-sector.component.css']
})
export class CreateSectorComponent implements OnInit {
  sector: Sector  = new Sector();
  constructor(private sectorService: SectorService,
              private router: Router) { }

  ngOnInit(): void {
  }

  saveSector(){
    console.log("amit");
    return this.sectorService.addSector(this.sector).subscribe(data => {
      console.log(data);
      this.goToSectorList();
    },
      (error: any) => console.log(error));
  }
  goToSectorList(){
    this.router.navigate(['/sectors']);
  }

  onSubmit(){
    console.log(this.sector);
    this.saveSector();
  }
}
