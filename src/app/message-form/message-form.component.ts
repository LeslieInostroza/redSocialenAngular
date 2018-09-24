import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { AuthService } from '../auth.service';
import { AngularFireAuth} from '@angular/fire/auth';
import { LoginGoogleFacebookComponent } from '../login-google-facebook/login-google-facebook.component';


@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})

export class MessageFormComponent implements OnInit {
  @Input() post;
  @Input() nombre;
  messageForm: FormGroup;
  userItem: any;
  messageList$ :AngularFireList<any>;
  //itemRef: AngularFireObject<any>;*/
  user: any;
  item: any = {
    name:'',
    likes:0,    
    }

  constructor(private formBuilder: FormBuilder, public authService: AuthService, private database:AngularFireDatabase, private dataservice: DataService, public afAuth: AngularFireAuth) { 
   // this.createData();
   //this.addPost();
    //this.createMessageForm();
    this.messageList$ = this.database.list('/others');
    //this.itemRef = this.database.object('/posts');
    this.afAuth.authState.subscribe(user => {
      if(user) 
      console.log(user.displayName); 

    });      
  }
  
  ngOnInit() {
  }
  
  agregar(){  
    this.dataservice.addItemPost(this.item)     
    this.item.name='';
    this.item.LoginGoogleFacebookComponent= '';
    this.item.likes='';            
  }

  /*createData(){
    this.messageForm = this.formBuilder.group({
      like: ['', Validators.required],               
    });
  } 
*/
  addPost(){
    this.afAuth.authState.subscribe(user => {
      if(user) 
        this.messageList$.push({ 
          nombre: user.displayName,
          likes:0,         
        })       
    });
    
  }

 addUser(){
 this.dataservice.userItem(this.userItem);
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
