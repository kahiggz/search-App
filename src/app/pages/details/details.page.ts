import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Set } from 'src/app/models/set.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  id: string;
  set$: Observable<Set[]>;

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.id = JSON.parse(this.route.snapshot.paramMap.get('uri'));
  }

  ngOnInit() {
    // this.getSets(this.id);
    this.set$ = this.dataService.getSpecificSet(this.id);
  }
}
