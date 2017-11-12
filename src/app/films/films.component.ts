import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

// Interface
import { FilmsInterface } from '../_interfaces/films.interface';

// Service
import { SearchService } from '../_services/search.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FilmsComponent implements OnInit {
  dataSource = new MatTableDataSource<FilmsInterface>();
  displayedColumns = [
    'episode_id',
    'title',
    'director',
    'producer',
    'release_date'
  ];

  constructor(
    private search: SearchService
  ) { }

  ngOnInit() {
    this.displayFilms();
  }

  displayFilms() {
    this.search
      .get('films')
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
