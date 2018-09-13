import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {
  messageForm: FormGroup;
  messageList$ :AngularFireList<any>;

  constructor(private formBuilder: FormBuilder, private database:AngularFireDatabase) { }

  ngOnInit() {
  }
  
  createMessageForm() {
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required]      
    });
  }

  addMessage() { 
    const newMeme = {
      name: this.messageForm.value.title,
      message: this.messageForm.value.image      
    };
    this.messageList$.push(newMeme);
    this.messageForm.reset();
}
}
