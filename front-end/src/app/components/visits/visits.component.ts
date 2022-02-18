import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import vistsData from '../../../assets/visits.json';

@Component({
  selector: 'app-visits',
  templateUrl: './visits.component.html',
  styleUrls: ['./visits.component.scss'],
})
export class VisitsComponent implements OnInit {
  items: any = vistsData;

  // constructor(private http: HttpClient) {
  //   this.http.get(this.data).subscribe(res => {
  //     console.log(res);
  //     this.items = res;
  //   });
  // }

  ngOnInit(): void {}
}
