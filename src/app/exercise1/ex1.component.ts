import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  people: any[] = [{
    "name":"bob",
    "age":22,
    "country":"AU"
  },{
    "name":"sam",
    "age":28,
    "country":"US"
  },{
    "name":"ram",
    "age":20,
    "country":"IND"
  },{
    "name":"peter",
    "age":18,
    "country":"UK"
  }];
  fruits: string[]=[];
  showGoogleButton : boolean = false;
  name : string = "divyanshu"
  variable : string = "hello world!!"
  width : number = 200;
  height :number = 200;
  google :string ="https://google.com";
  logo : string ="https://angular.io/assets/images/logos/angular/angular.svg";

  constructor() {

    this.fruits.push("Apple");
    this.fruits.push("Banana");
    this.fruits.push("Grapes");
    this.fruits.push("Papaya");
    this.fruits.push("Pomegrante");
    this.fruits.push("Orange");

   }

   

  showBtn(){
    if(this.name=="Internshala"){
      return true;
    }else{
      return false;
    }
  }

  toogleGoogleButton(){
    this.showGoogleButton = !this.showGoogleButton
  }

  sayHello(){
    alert("hello");
  }

  log(event){
    console.log(event)
  }

  ngOnInit() {
  }

  onPersonClicked(){
    console.log("person is clicked ");
  }

}
