import { Component, OnInit, Input } from '@angular/core';
import { faPhoneAlt, faMapMarkerAlt , faMoneyBillWave , faClock , faStethoscope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  faPhoneAlt = faPhoneAlt;
  faMapMarkerAlt = faMapMarkerAlt;
  faMoneyBillWave = faMoneyBillWave;
  faClock = faClock;
  faStethoscope = faStethoscope;
  
  @Input() item: any = {};

  constructor() {}

  ngOnInit(): void {}
}
