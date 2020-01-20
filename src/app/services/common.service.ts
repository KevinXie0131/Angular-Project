import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public domain:string='http://127.0.0.1:4200/';

  constructor(public http: HttpClient) { 

  }

  get(api){

    // return new Promise((resolve,reject)=>{
    //     this.http.get(this.domain + api).subscribe((response)=>{
    //         resolve(response);
    //     })  
    // })
    const result =  [{"_id":"5ac0896ca880f20358495508",
    "title":"Category I",
    "pid":"0",
    "list":[{
              "_id":"5ac1a22011f48140d0002955",
              "title":"Menu1",
              "price":"2",
              "img_url":"assets/images/1.jpg"
            },
            {
              "_id":"5ac1eb591a6b2f48fcb06210",
              "title":"Menu2",
              "price":"22",
              "img_url":"assets/images/2.jpg"
            },
            {
              "_id":"5ac1f04bd1bef433a42614cd",
              "title":"Menu3",
              "price":"25",
              "img_url":"assets/images/3.jpg"
            },
            {
              "_id":"5ad5ee4018644907b8dd58fa",
              "title":"Menu4",
              "price":"21",
              "img_url":"assets/images/4.jpg"
            }
        ]},
    {
      "_id":"5ac089e4a880f20358495509",
      "title":"Category II",
      "pid":"0",
      "list":[{
                "_id":"5ac1e7e28169fd522c9f5c96",
                "title":"Menu5",
                "price":"67",
                "img_url":"assets/images/5.jpg"
              },
              {
                "_id":"5ac2e79b127ca21160ffe32a",
                "title":"Menu6",
                "price":"1",
                "img_url":"assets/images/6.jpg"
              },
              {
                "_id":"5ad5b650c677913cdc50b04b",
                "title":"Menu7",
                "price":"1",
                "img_url":"assets/images/7.jpg"
              }
         ]}]
    return result;

  }
}
