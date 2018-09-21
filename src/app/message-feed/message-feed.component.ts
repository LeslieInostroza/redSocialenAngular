import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireAction, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { DataService } from '../data.service';
@Component({
  selector: 'app-message-feed',
  templateUrl: './message-feed.component.html',
  styleUrls: ['./message-feed.component.css']
})
export class MessageFeedComponent implements OnInit { 
  /*@Output () deleteItem: EventEmitter<any> = new EventEmitter<any>();
  posts$:Observable<any>;  
  itemsRef: AngularFireList<any>;
  */
  items:any;
  editarItem: any={
    name:''
  }

  constructor(private database:AngularFireDatabase, private dataservice: DataService) {
    //this.posts$ = this.database.list('/posts').valueChanges();    
    this.dataservice.postItem().subscribe(item=>{
      this.items = item;
      console.log(this.items);
    })
 }
  ngOnInit() {
  }

  eliminar(item){
    this.dataservice.deleteItem(item);
  }

  editar(item){
  this.editarItem= item;
  }

  agregarItemEditado(){
    this.dataservice.editarItem(this.editarItem);
  }
  /*createDeleteItem () {  
    this.deleteItem.emit({
      delete: this.itemsRef.remove(),
    });
  }   
  
  delete (key: string){
    this.itemsRef.remove(key); 
  }
  editItem (){
    this.itemsRef.remove();
    
  }
  */
}
