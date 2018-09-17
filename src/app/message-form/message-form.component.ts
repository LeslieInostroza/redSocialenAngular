import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {
  messageForm: FormGroup;
  messageList$ :AngularFireList<any>;
  itemRef: AngularFireObject<any>;

  constructor(private formBuilder: FormBuilder, private database:AngularFireDatabase) { 
    this.createMessageForm();
    this.messageList$ = this.database.list('/posts');
    this.itemRef = this.database.object('/posts');      
  }
  
  ngOnInit() {
  }
  
  createMessageForm() {
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      post: ['', Validators.required]      
    });
  }

  addMessage() { 
    const newMen = {
      name: this.messageForm.value.name,
      post: this.messageForm.value.post    
    };
    this.messageList$.push(newMen);
    this.messageForm.reset();
    
}
deletem() {
  this.itemRef.remove();
}
}
