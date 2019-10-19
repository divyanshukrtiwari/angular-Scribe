import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input('person') x: any;
  @Output('personClicked') personClicked = new EventEmitter();

  constructor() { }

  getSize(x){
    if(x.country=="IND"){
      return "36px";
    }else if(x.country == "AU"){
      return "30px";
    }
  }

  ngOnInit() {
  }

  onClick(){
    this.personClicked.emit();
  }

}
