import { Component, Input, OnInit } from '@angular/core';
import { Set } from 'src/app/models/set.model';

@Component({
  selector: 'app-detail',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  @Input() set: Set;

  constructor() {}

  ngOnInit() {}
}
