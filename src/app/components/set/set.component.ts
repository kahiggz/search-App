import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.scss'],
})
export class SetComponent implements OnInit {
  @Input() set: any;

  constructor() {}

  ngOnInit() {}
}
