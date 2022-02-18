import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button-template',
  templateUrl: './button-template.component.html',
  styleUrls: ['./button-template.component.scss'],
})
export class ButtonTemplateComponent implements OnInit {
  closeResult = '';
  faCalendarAlt = faCalendarAlt;
  btnTitle = 'Save';

  date: any = '';

  @Input() doctor: any = {};

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  getData() {
    console.log(this.doctor);
    console.log(this.date);
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
