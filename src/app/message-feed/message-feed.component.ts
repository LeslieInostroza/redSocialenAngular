import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireAction, AngularFireList } from '@angular/fire/database';
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
  itemsRef: AngularFireList<any>;
  constructor(private database:AngularFireDatabase) {
    this.posts$ = this.database.list('/posts').valueChanges();    
    this.itemsRef = this.database.list('/posts');
    this.itemsRef.snapshotChanges(['child_added'])
  .subscribe(actions => {
    actions.forEach(action => {
      console.log(action.type);
      console.log(action.key);
      console.log(action.payload.val());
    });
  });
 }
  ngOnInit() {
  }

  deleteItem (key: string) {    
    this.itemsRef.remove(key); 
  }

  editItem (){
    this.itemsRef.remove();
    
  }
}
