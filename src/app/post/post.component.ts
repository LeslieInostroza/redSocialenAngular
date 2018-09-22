import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post;
  @Input() postId;
  enableEditPost = true;
  editContent: FormGroup;
  constructor(private formBuilder: FormBuilder, private DatabaseService: DataService) {
    this.createEditContentForm();
   }
  
   createEditContentForm() {
    this.editContent = this.formBuilder.group({
      content: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.editContent.patchValue({
      content: this.post.contenido
    });
  }

  deletePost(key){
    if(confirm('¿quieres eliminar este mensaje?')){
      this.DatabaseService.deleteData(key)
    } 
  }
  addLike(key, likes){
    likes++
    this.DatabaseService.updateData(key, { likes: likes++ })
  }
  enableEdit() {
    this.enableEditPost = false;
  }
  editPost(key){
    this.DatabaseService.updateData(key, { contenido: this.editContent.value.content})
  }

}
