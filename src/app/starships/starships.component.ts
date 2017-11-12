import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

// Interface
import { StarshipsInterface } from '../_interfaces/starships.interface';

// Service
import { SearchService } from '../_services/search.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StarshipsComponent implements OnInit {
  dataSource = new MatTableDataSource<StarshipsInterface>();
  displayedColumns = [
    'name',
    'model',
    'manufacturer',
    'cost_in_credits',
    'length',
    'crew',
    'passengers',
    'cargo_capacity',
    'consumables',
    'hyperdrive_rating',
    'starship_class'
  ];

  constructor(
    private search: SearchService
  ) { }

  ngOnInit() {
    this.displayStarships();
  }
  
  displayStarships() {
    this.search
      .get('starships')
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
  
