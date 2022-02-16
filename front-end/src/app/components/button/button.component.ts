import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  btnTitle = 'Send';
  isLoading = false;

  constructor() {}

  ngOnInit(): void {}

  getLoadinegTitle() {
    this.isLoading = true;
    this.btnTitle = 'Loading...';

    setTimeout(() => {
      this.isLoading = false;
      this.btnTitle = 'Send';
    }, 2000);
  }
}
