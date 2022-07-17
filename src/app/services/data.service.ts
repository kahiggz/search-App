import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { filter, find, map, tap } from 'rxjs/operators';
import { Set } from '../models/set.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getSets(): Observable<Set[]> {
    return this.http
      .get('assets/mockData.json')
      .pipe(tap((sets: Set[]) => sets));
  }

  getSpecificSet(id: string): Observable<Set[]> {
    return this.http
      .get('assets/mockData.json')
      .pipe(map((sets: Set[]) => sets.filter((set: Set) => set.id === id)));
  }
}
