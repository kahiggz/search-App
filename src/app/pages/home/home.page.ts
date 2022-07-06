import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Set } from '../../models/set.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  sets$: Observable<Response>;

  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.getSets();
  }

  getSets = () => {
    this.sets$ = this.dataService.getSets();
    // setsObservable$.subscribe((setsData: any) => {
    //   this.sets = setsData;
    //   console.log(this.sets);
    // });
  };
}
