import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

// Interface
import { VehiclesInterface } from '../_interfaces/vehicles.interface';

// Service
import { SearchService } from '../_services/search.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VehiclesComponent implements OnInit {
  dataSource = new MatTableDataSource<VehiclesInterface>();
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
    'vehicle_class'
  ];

  constructor(
    private search: SearchService
  ) { }

  ngOnInit() {
    this.displayVehicles();
  }
  
  displayVehicles() {
    this.search
      .get('vehicles')
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
  
