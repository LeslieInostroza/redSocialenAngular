import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PaginaMuroComponent } from '../pagina-muro/pagina-muro.component';

@Component({
  selector: 'app-red-social-login',
  templateUrl: './red-social-login.component.html',
  styleUrls: ['./red-social-login.component.css']
})
export class RedSocialLoginComponent implements OnInit {
@Output() onChange: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
ChangeWall(PaginaMuroComponent){
  this.onChange.emit({
    
  });
}
}
