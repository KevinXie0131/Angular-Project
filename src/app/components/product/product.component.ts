import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public list:any[]=[];

  public domain:string='';

  constructor(public common: CommonService) {
    this.domain = this.common.domain;
   }

  ngOnInit() {


    // var api='api/productlist';
    // this.common.get(api).then((response:any)=>{
    //   console.log(response);
    //   this.list=response.result;
    // })
    this.list = this.common.get(null);
  
  }

}
