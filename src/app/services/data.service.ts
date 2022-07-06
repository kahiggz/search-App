import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mockSetsData } from '../services/mockData';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { filter, find, map } from 'rxjs/operators';
import { Set } from '../models/set.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getSets = (): Observable<Set[]> => {
    return this.http.get('assets/mockData.json').pipe(map((res: Set[]) => res));
  };

  getSpecificSet = (id: string): Observable<Set[]> => {
    return this.http
      .get('assets/mockData.json')
      .pipe(map((res: Set[]) => res.filter((re: Set) => re.id === id)));
  };
}
