import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-my-blogs',
  templateUrl: './my-blogs.component.html',
  styleUrls: ['./my-blogs.component.css']
})
export class MyBlogsComponent implements OnInit {

  user:any = {};
  posts:any[] = [];

  constructor() { 
    this.user = firebase.auth().currentUser;
    this.getPosts();
  }

  ngOnInit() {
  }

  getPosts(){
    firebase.firestore().collection("posts")
    .orderBy("created","desc")
    .get().then((querySnapshot)=>{
      console.log(querySnapshot.docs);
      this.posts = querySnapshot.docs;
    }).catch((error)=>{
      console.log(error);
    })
  }
  onPostCreated(){
    //refresh the list of posts
    this.posts = [];
    this.getPosts();
  }
  onDelete(){
    //refresh the list of posts
    this.posts = [];
    this.getPosts();
  }
}
