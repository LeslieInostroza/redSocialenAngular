import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireAction, } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-message-feed',
  templateUrl: './message-feed.component.html',
  styleUrls: ['./message-feed.component.css']
})
export class MessageFeedComponent implements OnInit { 
  @Output () deleteMen: EventEmitter<any> = new EventEmitter<any>();
  posts$:Observable<any>;  
  itemRef:AngularFireObject<any>;
  messageFeed: FormGroup;
  item: any;
  constructor(private database:AngularFireDatabase) {
    this.posts$ = this.database.list('/posts').valueChanges();    
    this.itemRef = this.database.object('/posts');
    this.item =  this.itemRef.snapshotChanges().subscribe(action => {
      console.log(action.type);
      console.log(action.key)
      console.log(action.payload.node_.children_.root_.key)  
    });

    
 }
  ngOnInit() {
  }

  deleteItem (key: string) {    
    this.itemRef.remove(); 
  }

  editItem (){
    this.itemRef.remove();
    
  }
}
