
import { Component } from '@angular/core';
;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})


export class AppComponent {
  title = 'TaxNSalaryCla';

  workperday:number = 0.0
  workperweek:number = 0.0
  totalannualpack:number = 0.0
  result:number = 0.0
  elementVisible = false;
  elementError = false;
  showresult(){
    if(this.workperday <= 0 || this.workperweek <= 0 || this.totalannualpack <=0){
         this.elementError = true;
    }else{
      let add =  (this.totalannualpack)/(this.workperday * this.workperweek * 52);
      this.result = add;
      this.elementError = false;
      this.elementVisible = !this.elementVisible;
      }
    }

  
  cancel():void{
    
    this.workperday = 0.0
    this.workperweek = 0.0
    this.totalannualpack =0.0
    this.result = 0.0
    this.elementVisible= false;
    this.elementError = false;
  }

}
