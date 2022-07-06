import { Component } from '@angular/core';
import { Set } from '../../models/set.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  sets: Set[];

  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.getSets();
  }

  getSets = () => {
    const setsObservable$ = this.dataService.getSets();
    setsObservable$.subscribe((setsData: any) => {
      this.sets = setsData;
      console.log(this.sets);
    });
  };
}
