import { VisitsService } from './../../services/visits.service';
import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-button-template',
  templateUrl: './button-template.component.html',
  styleUrls: ['./button-template.component.scss'],
})
export class ButtonTemplateComponent implements OnInit {
  closeResult = '';
  faCalendarAlt = faCalendarAlt;
  visit: any = {
    doctorName: '',
    specialty: '',
    date: '',
    doctorId: '32423423',
    userId: '45425322',
  };
  date: any;

  @Input() doctor: any = {};

  constructor(
    private modalService: NgbModal,
    private VisitsService: VisitsService
  ) {}

  ngOnInit(): void {}

  // getData() {
  //   console.log(this.doctor.userName);
  //   console.log(this.doctor.specialty);
  //   console.log(this.date);
  // }

  // new Observable

  createVisit() {
    this.visit.doctorName = this.doctor.doctorName;
    this.visit.specialty = this.doctor.specialty;
    this.visit.date = this.date;

    console.log(this.visit);
    
    this.VisitsService.addVisit(this.visit).subscribe(
      (response: any) => (this.visit = response)
    );
  }

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
