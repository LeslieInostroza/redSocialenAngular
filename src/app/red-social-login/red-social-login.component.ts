import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-red-social-login',
  templateUrl: './red-social-login.component.html',
  styleUrls: ['./red-social-login.component.css']
})
export class RedSocialLoginComponent implements OnInit {
  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }
}
