import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public domain:string='';

  public list:any;

  detail:any;;

  constructor(public route:ActivatedRoute, public common:CommonService) {

    this.domain=this.common.domain;

   }

  ngOnInit() {

    this.route.params.subscribe((value:any)=>{   
      this.list = this.common.get(null);

      for(let category of this.list){  
        for(let item of category.list){
          if(item._id == value.id){
            this.detail = item;
          }
        }
      }
    })
  }

}
