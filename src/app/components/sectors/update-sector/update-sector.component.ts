import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sector } from 'src/app/models/Sector';
import { SectorService } from 'src/app/services/sector.service';

@Component({
  selector: 'app-update-sector',
  templateUrl: './update-sector.component.html',
  styleUrls: ['./update-sector.component.css']
})
export class UpdateSectorComponent implements OnInit {

  public id!: number;
  sector: Sector = new Sector();
  constructor(private sectorService: SectorService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
    this.sectorService.getSectorById(this.id).subscribe(data => {
      this.sector = data;
    }, (error: any) => console.log(error));
  }
  
  onSubmit(){
    console.log("amit")
    this.sectorService.updateSector(this.id, this.sector).subscribe( data =>{
        this.goToSectorList();
      }
      , (error: any) => console.log(error));
  }

  goToSectorList(){
    this.router.navigate(['/sectors']);
  }
}
