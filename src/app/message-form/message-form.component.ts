import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {
 /* messageForm: FormGroup;
  messageList$ :AngularFireList<any>;
  itemRef: AngularFireObject<any>;*/
  item: any = {
    name:''
  }
  constructor(private database:AngularFireDatabase, private dataservice: DataService) { 
    //this.createMessageForm();
    //this.messageList$ = this.database.list('/posts');
    //this.itemRef = this.database.object('/posts');      
  }
  
  ngOnInit() {
  }
  
  agregar(){
    this.dataservice.addItemPost(this.item); 
    this.item.name='';   
  }
  /*createMessageForm() {
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      post: ['', Validators.required],
          
    });
  }

  addMessage() { 
    const newMen = {
      name: this.messageForm.value.name,
      //user: this.authService.user.email,
      post: this.messageForm.value.post,
      like: 0,
    };
    this.messageList$.push(newMen);
    this.messageForm.reset();
    
}
*/
}
