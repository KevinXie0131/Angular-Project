import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { CommonService } from '../../services/common.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public keyword: string;
  public historyList: any[] = [];
  
  public task:string;
  public todolist:any[]=[];

  public course:  Observable<{}>;

  public hero: string = 'jack';
  public master: string = 'tom';
  private counter: number = 1;

  constructor(public storage: StorageService, public common: CommonService) { 
   
  }

  ngOnInit() {

    var searchlist: any = this.storage.get('searchlist');

    if(searchlist){
      this.historyList = searchlist;        
    }

      
    var todolist:any=this.storage.get('todolist');

    if(todolist){
      this.todolist=todolist;        
    }

    this.course = this.common.getCourse();

    setInterval( ()=>{
          this.hero = 'jack' + this.counter;
          this.counter++;
      },
      5000
    );
  
  }

  doSearch(){

    if(this.historyList.indexOf(this.keyword) == -1){

      this.historyList.push(this.keyword);
      this.storage.set('searchlist', this.historyList);
    }    
    this.keyword = '';    
  }

  deleteHistroy(key){
      
      this.historyList.splice(key,1);
      this.storage.set('searchlist', this.historyList);
  }


  doAdd(){    
    if(!this.todolistHasTask(this.todolist, this.task)){
      this.todolist.push({
        title:this.task,
        status:0                   
      });

      this.task='';
      this.storage.set('todolist', this.todolist);          
    }else{
      alert('task exists');
      this.task='';
    }
    
  }

  deleteData(task){

    this.todolist.splice(task,1);
    this.storage.set('todolist', this.todolist); 
  }

  todolistHasTask(todolist: any, task: any){
    if(!task) {
      return false;
    }

    for(var i=0; i < todolist.length; i++){
      if(todolist[i].title == task){
          return true;
      } 
    }
    return false;

  }

  checkboxChage(){
    this.storage.set('todolist', this.todolist); 
  }

}
