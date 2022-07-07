import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progamer-items',
  templateUrl: './progamer-items.component.html',
  inputs: ['progamer']
})
export class ProgamerItemsComponent implements OnInit {

  @Input() progamer?: any;

  constructor() { }

  ngOnInit(): void {
  }

}
