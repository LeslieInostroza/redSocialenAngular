import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

export interface Image { 
  img: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataImgPerfilService {

  private imagesCollection: AngularFirestoreCollection<Image>;
  images: Observable<Image[]>;
  private imageDoc: AngularFirestoreDocument<Image>;

  constructor(private afs: AngularFirestore, public afAuth: AngularFireAuth, private database: AngularFireDatabase) { 
    this.imagesCollection = afs.collection<Image>('images');
    this.images = this.imagesCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Image;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  postImage(){
    return this.images;
  }

  addImagePost(image: Image) {
    this.imagesCollection.add(image);
  }

  urlImage(image){
    this.imageDoc = this.afs.doc<Image>(`images/${image.id}`);
  }

  deleteImage(image){
  this.imageDoc= this.afs.doc<Image>(`images/${image.id}`);
  this.imageDoc.delete();
  }

  editarImage(image){
    this.imageDoc= this.afs.doc<Image>(`images/${image.id}`);
    this.imageDoc.update(image);
    }

  /*likeImage(image:Image){    
    //Fijate que sea el ID que quieres, ahí le estás dando los likes, no el ID
    image.likes++;
    this.imageDoc= this.afs.doc<Image>(`images/${image.id}`);
    this.imageDoc.update(image);
  }*/

}
