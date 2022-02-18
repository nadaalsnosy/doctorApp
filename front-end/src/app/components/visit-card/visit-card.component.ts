import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-visit-card',
  templateUrl: './visit-card.component.html',
  styleUrls: ['./visit-card.component.scss'],
})
export class VisitCardComponent implements OnInit {

  @Input() item: any = {};

  constructor() {}

  ngOnInit(): void {}
}
