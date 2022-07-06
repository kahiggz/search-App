import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mockSetsData } from '../services/mockData';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getSets = () => {
    const setsObservable = new Observable((observer) => {
      setTimeout(() => {
        observer.next(mockSetsData);
      }, 3000);
    });

    return setsObservable;
  };
}
