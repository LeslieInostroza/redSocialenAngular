import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth} from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { MatInputModule } from '@angular/material/input';


export interface Item { name: string; }

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  like: Observable<Item[]>;
  messageList$: AngularFireList<any>;
  private itemDoc: AngularFirestoreDocument<Item>;
  
  constructor(private afs: AngularFirestore, public afAuth: AngularFireAuth, private database: AngularFireDatabase ) {
    this.itemsCollection = afs.collection<Item>('items');
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    this.afAuth.authState.subscribe(user => {
      if(user) 
      console.log(user.displayName); 

    });
    this.messageList$ = this.database.list('/others'); 
  }

  postItem(){
    return this.items;
  }

  addItemPost(item: Item) {
    this.itemsCollection.add(item);
  }

  deleteItem(item){
  this.itemDoc= this.afs.doc<Item>(`items/${item.id}`);
  this.itemDoc.delete();
  }

  editarItem(item){
    this.itemDoc= this.afs.doc<Item>(`items/${item.id}`);
    this.itemDoc.update(item);
    }

  likeItem(object, id){    
    //Fijate que sea el ID que quieres, ahí le estás dando los likes, no el ID
    this.database.object(`others/${id}`).update(object);
    //this.itemDoc= this.afs.doc<Item>(`items/${like.id}`);
    //this.itemDoc.update(like);
  }

  userItem(item){
    this.itemDoc= this.afs.doc<Item>(`items/${item.user.displayName}`);
    this.itemDoc.update(item);
  }

  
 /* postList$: AngularFireList<any>;
  constructor(private database: AngularFireDatabase) {
    this.postList$ = this.database.list('/posts');
   }
   addData(path, object) {
    this.database.list(path).push(object);
  }
  getData(){
     return this.postList$.snapshotChanges()
  }
  deleteData(key){
    this.database.object(`posts/${key}`).remove();
  }
  updateData(key, object){
    this.database.object(`posts/${key}`).update(object);
  }
  */
}
