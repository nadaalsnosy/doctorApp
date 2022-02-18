import { VisitsService } from './../../services/visits.service';
import { Component, OnInit, Input } from '@angular/core';
import vistsData from '../../../assets/visits.json';

@Component({
  selector: 'app-visits',
  templateUrl: './visits.component.html',
  styleUrls: ['./visits.component.scss'],
})
export class VisitsComponent implements OnInit {
  items: any = vistsData;

  constructor(private VisitsService: VisitsService) {
    this.VisitsService.getAll().subscribe((res) => {
      console.log(res);
      this.items = res;
    });
  }

  ngOnInit(): void {}

  // getAllData() {
  //   this.VisitsService.getAll().subscribe(
  //     (response: any) => (this.visit = response)
  //   );
  // }
}
