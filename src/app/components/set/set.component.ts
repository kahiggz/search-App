import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.scss'],
})
export class SetComponent implements OnInit {
  @Input() set: any;
  noImage: boolean = false;

  constructor() {}

  ngOnInit() {}

  loadError(event) {
    this.noImage = true;
    this.set.icon_svg_uri =
      'https://c2.scryfall.com/file/scryfall-symbols/sets/default.svg?1643000400';
  }
}
