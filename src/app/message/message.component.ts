import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
//import { Message-feed } from '../message-feed';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit { 
  
  @Input() name: string; 
  @Input() post: string;
  
  constructor() { 
    
  }

  ngOnInit() {
  }

}
