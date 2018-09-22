import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export interface Item { name: string; }

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  private itemDoc: AngularFirestoreDocument<Item>;
  
  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('items');
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
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
