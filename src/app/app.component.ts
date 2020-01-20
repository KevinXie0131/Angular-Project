import { Component, OnInit } from '@angular/core';
import { filter ,map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'Angular';
  public today=new Date();

  constructor(public http:HttpClient){

  }

  ngOnInit(): void {
    const api = "https://api.genderize.io/?name=peter";

    this.http.get(api).subscribe(response => {
      console.log(response);
    });

    axios.get(api)
      .then(function (response) {
         console.log(response.data.name);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
      });

  }

  ngAfterViewInit() {
    let stream = new Observable<number>(observer => {
      let count = 0;
      setInterval(() => {
          observer.next(count++);
        }, 1000);
    });
 
    stream.subscribe(value => console.log("Observable -> " + value));

    stream.pipe(filter(value => value%2 == 0)).subscribe(value => console.log("rxjs filter ->" + value));

    stream.pipe(map(value => {
        return value * value
      })
    ).subscribe(value => console.log("rxjs map ->" + value));

  }

}
