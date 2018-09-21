import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireAction, AngularFireList } from '@angular/fire/database';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Observable } from 'rxjs';
//import { Message-feed } from '../message-feed';
import { async } from '@angular/core/testing';
import { Key } from 'protractor';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {  
  @Input() name: string; 
  @Input() post: string;
  posts$:Observable<any>;  
  itemsRef: AngularFireList<any>;
   
  constructor(private database:AngularFireDatabase) {    
    /*this.posts$ = this.database.list('/posts').valueChanges();    
    this.itemsRef = this.database.list('/posts');
   this.itemsRef.snapshotChanges(['child_added'])
  .subscribe(actions => {
    actions.forEach(action => {
      console.log(action.type);
      console.log(action.key);
      console.log(action.payload.val());
    });
  }); 
  */
  }

  ngOnInit() {
  }

  /*deleteItem(key){       
  this.database.object(`posts/${key}`).remove();
  //this.itemsRef.remove();
  }
  */
}
