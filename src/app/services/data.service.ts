import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mockSetsData } from '../services/mockData';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getSets = () => {
    return this.http
      .get('assets/mockData.json')
      .pipe(map((res: Response) => res));

    // const setsObservable = new Observable((observer) => {
    //   setTimeout(() => {
    //     observer.next(mockSetsData);
    //   }, 3000);
    // });

    // return setsObservable;
  };
}
