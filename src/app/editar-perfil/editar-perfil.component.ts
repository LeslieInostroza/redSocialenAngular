import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { DataService, Item} from '../data.service';
import { DataImgPerfilService } from '../data-img-perfil.service';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {
  image: any = {
    imgGaleria:'',

    }

  uploadPercent: Observable<number>;
  downloadUrl: Observable<string>;
  profileUrl: Observable<string>;
  task:Observable<string>;
  file= null;
  filePath: string;
  fileroot: string;

  
  
  constructor(private storage: AngularFireStorage, private dataImgPerfilService: DataImgPerfilService, public authService: AuthService, public afAuth: AngularFireAuth) { 
    
  }

  ngOnInit() {
  }
  
  agregar(){
    this.dataImgPerfilService.addImagePost(this.image);
    let img = 'img';
  }
 
  uploadFile(event) {
   this.file = event.target.files[0];
   let fileroot = this.file.name;
   let filePath;

   const fileRef = this.storage.ref(fileroot);
   const task = this.storage.upload(fileroot, this.file);
   
   console.log(task)
     this.uploadPercent = task.percentageChanges();
     
     task.snapshotChanges().pipe(finalize(() => {
      this.profileUrl = fileRef.getDownloadURL();
      this.profileUrl.subscribe(url => {
        const myImage = new Image();
        myImage.src = url;
        console.log(myImage);
        this.image.imgGaleria = myImage.src;
        //this.urlColection = myImage.src;
      })
     })
     ).subscribe()
     //task.snapshotChanges().pipe(finalize(() => this.downloadUrl = fileRef.getDownloadURL())).subscribe()
        //this.imgUrl = url.downloadURL;
        
     
     console.log('aca -->' + this.downloadUrl);
     
  }
}
