import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { DataService, Item} from '../data.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {
  uploadPercent: Observable<number>;
  downloadUrl: Observable<string>;
  profileUrl: Observable<string>;

  item: any = {
    img: ''
  }

  imgUrl:string;
  
  constructor(private storage: AngularFireStorage, private dataservice: DataService) { 
    
  }

  ngOnInit() {
  }
  
  agregar(){
    this.dataservice.addItemPost(this.item);
    this.item.img='';
  }

  uploadFile(event) {
   const file = event.target.files[0];
   const filePath = 'img';
   const fileRef = this.storage.ref(filePath);
   const task = this.storage.upload(filePath, file);
   this.profileUrl = fileRef.getDownloadURL();
   console.log(task)
     this.uploadPercent = task.percentageChanges();
     task.snapshotChanges().pipe(finalize(() => this.downloadUrl = fileRef.getDownloadURL()))
     .subscribe((url)=>{
        this.imgUrl = url.downloadURL;
     })
 }
}
