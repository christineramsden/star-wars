import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
 
const endpoint = 'https://swapi.co/api/';

@Injectable()
export class SearchService {
      constructor(
          private http: Http
      ) {}
  
      get(resourceType: string) {
          return this.http.get(endpoint + resourceType + '/')
            .map((response: Response) => response.json());
      }
}
