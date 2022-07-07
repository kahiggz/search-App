import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Set } from '../../models/set.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  sets$: Observable<Set[]>;

  constructor(private router: Router, private dataService: DataService) {}
  ngOnInit() {
    this.getSets();
  }

  getSets = () => {
    return (this.sets$ = this.dataService.getSets());
    // this.sets$.subscribe((setsData: any) => {
    //   this.sets$ = setsData;
    //   console.log(this.sets$);
    // });
  };

  navigate = (id: string) => {
    return this.router.navigate(['/details', { uri: JSON.stringify(id) }]);
  };
}
