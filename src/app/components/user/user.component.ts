import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public peopleInfo:any={

    username:'',
    sex:'2',
    cityList:['New York','Toront','Montreal'],
    city:'Toront',

    hobby:[{
          title:'reading',
          checked:false
      },{
          title:'coding',
          checked:false
      },{
          title:'shopping',
          checked:true
      }],

      mark:''
  }
  
  constructor() { }

  ngOnInit() {
  }

  doSubmit(){
    console.log(this.peopleInfo);
  }
}
