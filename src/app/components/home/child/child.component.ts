import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
 
  @Input('master') masterName: string;

  private _hero = '';

  @Input()
  set hero(hero: string) {
    this._hero = (hero && hero.trim()) || '<no hero set>';
    console.log("hero is setting.." + hero);
  }

  get hero(): string { 
    return this._hero; 
  }

  constructor() { }

  ngOnInit() {
  }

}
