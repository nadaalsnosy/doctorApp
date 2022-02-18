import { Component, OnInit } from '@angular/core';
import doctorsData from '../../../assets/doctors.json';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.scss'],
})
export class CardsContainerComponent implements OnInit {
  doctors: any = doctorsData;

  constructor() {}

  ngOnInit(): void {}
}
