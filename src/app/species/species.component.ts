import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

// Interface
import { SpeciesInterface } from '../_interfaces/species.interface';

// Service
import { SearchService } from '../_services/search.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SpeciesComponent implements OnInit {
  dataSource = new MatTableDataSource<SpeciesInterface>();
  displayedColumns = [
    'name',
    'classification',
    'designation',
    'average_height',
    'skin_colors',
    'hair_colors',
    'eye_colors',
    'average_lifespan',
    'language'
  ];

  constructor(
    private search: SearchService
  ) { }

  ngOnInit() {
    this.displaySpecies();
  }
  
  displaySpecies() {
    this.search
      .get('species')
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
  
