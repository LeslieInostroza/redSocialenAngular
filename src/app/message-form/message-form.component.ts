import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { AuthService } from '../auth.service';
import { LoginGoogleFacebookComponent } from '../login-google-facebook/login-google-facebook.component';


@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})

export class MessageFormComponent implements OnInit {
  messageForm: FormGroup;
  messageList$ :AngularFireList<any>;
  //itemRef: AngularFireObject<any>;*/
  user: any;
  item: any = {
    name:'',
    like: '',
    }

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private database:AngularFireDatabase, private dataservice: DataService) { 
    this.createData();
    //this.createMessageForm();
    this.messageList$ = this.database.list('/others');
    //this.itemRef = this.database.object('/posts');      
  }
  
  ngOnInit() {
  }
  
  agregar(){  
    this.dataservice.addItemPost(this.item)     
    this.item.name='';
    this.item.LoginGoogleFacebookComponent= '';
    let time = new Date().toLocaleString()
    const newMen = {
      like: this.messageForm.value.like,      
      time: this.messageForm.value.time,     
    };
    this.messageList$.push(newMen);
    this.messageForm.reset();           
  }

  createData(){
    this.messageForm = this.formBuilder.group({
      like: ['', Validators.required],
      time: ['', Validators.required],          
    });
  }
  addDat() {
    let time = new Date().toLocaleString()
    const newMen = {
      like: this.messageForm.value.like,
      //user: this.authService.user.email,
      time: this.messageForm.value.time,     
    };
    this.messageList$.push(newMen);
    this.messageForm.reset();
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
