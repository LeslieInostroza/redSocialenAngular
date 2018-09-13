import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-message-feed',
  templateUrl: './message-feed.component.html',
  styleUrls: ['./message-feed.component.css']
})
export class MessageFeedComponent implements OnInit {
  messages$:Observable<any>; 
  constructor(private database:AngularFireDatabase) {this.messages$ = this.database.list('/memes').valueChanges();
 }
  ngOnInit() {
  }

}
