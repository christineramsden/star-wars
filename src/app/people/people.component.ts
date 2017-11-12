import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

// Interface
import { PeopleInterface } from '../_interfaces/people.interface';

// Service
import { SearchService } from '../_services/search.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PeopleComponent implements OnInit {
  dataSource = new MatTableDataSource<PeopleInterface>();
  displayedColumns = [
    'name',
    'height',
    'mass',
    'hair_color',
    'skin_color',
    'eye_color',
    'birth_year',
    'gender'
  ];

  constructor(
    private search: SearchService
  ) { }

  ngOnInit() {
    this.displayPeople();
  }
  
  displayPeople() {
    this.search
      .get('people')
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
  
