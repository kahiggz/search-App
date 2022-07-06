import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  id: string;
  set$: any;

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.id = JSON.parse(this.route.snapshot.paramMap.get('uri'));
  }

  ngOnInit() {
    this.getSets(this.id);
  }

  getSets = async (id: string) => {
    this.set$ = this.dataService.getSpecificSet(id);

    this.set$.subscribe((setsData: any) => {
      console.log(setsData);
    });
  };
}
