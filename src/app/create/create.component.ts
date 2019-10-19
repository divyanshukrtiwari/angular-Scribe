import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  editorConfig:any;
  title:string;
  content:string;
  @Output('postCreated') postcreated = new EventEmitter();

  constructor() { 
    this.editorConfig = {
      "editable": true,
      "spellcheck": true,
      "height": "0",
      "minHeight": "150px",
      "width": "auto",
      "minWidth": "0",
      "translate": "yes",
      "enableToolbar": true,
      "showToolbar": false,
      "placeholder": "Enter text here...",
      "imageEndPoint": "",
      "toolbar": [
          ["bold", "italic", "underline", "strikeThrough", "superscript", "subscript"],
          ["fontName", "fontSize", "color"],
          ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "indent", "outdent"],
          ["cut", "copy", "delete", "removeFormat", "undo", "redo"],
          ["paragraph", "blockquote", "removeBlockquote", "horizontalLine", "orderedList", "unorderedList"],
          ["link", "unlink", "image", "video"]
      ]
    }
  }

  ngOnInit() {
  }

  createPost(){

    firebase.firestore().collection("posts").add({
      title : this.title,
      content : this.content,
      owner : firebase.auth().currentUser.uid,
      created : firebase.firestore.FieldValue.serverTimestamp() 
    }).then((data)=>{
      console.log(data);
      this.postcreated.emit();
    }).catch((error)=>{
      console.log(error);
    })
  }

}
