import { VisitsService } from './../../services/visits.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  username = 'user name';
  @Input() title = '';
  constructor(private VisitsService: VisitsService) {}

  ngOnInit(): void {}

  // getAllData() {
  //   this.VisitsService.getAll().subscribe(
  //     (response: any) => (this.visit = response)
  //   );
  // }
}
