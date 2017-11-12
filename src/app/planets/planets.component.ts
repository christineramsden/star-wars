import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

// Interface
import { PlanetsInterface } from '../_interfaces/planets.interface';

// Service
import { SearchService } from '../_services/search.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PlanetsComponent implements OnInit {
  dataSource = new MatTableDataSource<PlanetsInterface>();
  displayedColumns = [
    'name',
    'rotation_period',
    'orbital_period',
    'diameter',
    'climate',
    'gravity',
    'terrain',
    'surface_water',
    'population'
  ];

  constructor(
    private search: SearchService
  ) { }

  ngOnInit() {
    this.displayPlanets();
  }
  
  displayPlanets() {
    this.search
      .get('planets')
      .subscribe(
        data => {
          this.dataSource!.data = data.results;
        },
        error => {
          // TODO: add error handling
        }
      );
  }
}
  
