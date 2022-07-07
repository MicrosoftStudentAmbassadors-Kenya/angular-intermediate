import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progamer-details',
  templateUrl: './progamer-details.component.html'
})
export class ProgamerDetailsComponent implements OnInit {

  @Input() progamer: any;

  constructor() { }

  ngOnInit(): void {
  }

}
