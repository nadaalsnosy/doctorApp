import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorsService } from './../../services/doctors.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.scss'],
})
export class DoctorDetailsComponent implements OnInit {
  doctorId: any;
  doctorDetails: any;
  constructor(
    private route: ActivatedRoute,
    private doctorsService: DoctorsService
  ) {}

  ngOnInit(): void {
    this.doctorId = this.route.snapshot.paramMap.get('id');
    if (this.doctorId) {
      this.doctorDetails = this.doctorsService.getDoctorDetailsByID(
        this.doctorId
      );
      console.log(this.doctorDetails);
    }
    console.log(this.doctorId);
  }
}
