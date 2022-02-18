import { Component, OnInit } from '@angular/core';
import { faFacebookF , faGooglePlusG , faLinkedinIn , faDribbble , faTwitter } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  faFacebookF = faFacebookF;
  faGooglePlusG = faGooglePlusG;
  faLinkedinIn = faLinkedinIn;
  faDribbble = faDribbble;
  faTwitter = faTwitter;

  constructor() {}

  ngOnInit(): void {}
}
