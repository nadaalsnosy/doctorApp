import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { faCalendarAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button-template',
  templateUrl: './button-template.component.html',
  styleUrls: ['./button-template.component.scss'],
})
export class ButtonTemplateComponent implements OnInit {
  closeResult = '';
  faCalendarAlt = faCalendarAlt;
  btnTitle = 'Book';
  isLoading = false;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  getLoadinegTitle() {
    this.isLoading = true;
    this.btnTitle = 'Loading...';

    setTimeout(() => {
      this.isLoading = false;
      this.btnTitle = 'Send';
    }, 2000);
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
