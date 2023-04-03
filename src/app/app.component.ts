
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})


export class AppComponent {



  title = 'TaxNSalaryCla';

  workperday: number = 0.0;
  workperweek: number = 0.0;
  totalannualpack: number = 0.0;
  hour_rate: number = 0.0;
  per_day: number = 0.0;
  weekly_rate: number = 0.0;
  biweek: number = 0.0;
  monthly_rate: number = 0.0;
  total_hour_perweek = 0.0;

  per_hour: number = 0.0;
  your_annual_package: number = 0.0

  elementVisible1 = false;
  elementVisible2 = false;
  elementVisible3 = false;
  elementVisible4 = false;
  elementVisible5 = false;
  elementVisible6 = false;
  elementVisible7 = false;

  disable1: boolean = true;
  disable2: boolean = true;
  disable3: boolean = true;
  disable4: boolean = true;
  elementError = false;



  //this is for selected item based on the drop down menu
  options: string[] = ["Choose Options", "Rate Per Hour", "Yearly Package"];
  selectedOption: string = ''; // set the type explicitly to string

  onOptionSelected(option: string) {
    this.selectedOption = option;
  }

  showresult(): void {

    if (this.selectedOption === this.options[1]) {
      if (this.workperday <= 0 || this.workperweek <= 0 || this.totalannualpack <= 0) {
        this.elementError = true;
      } else {
        let add = (this.totalannualpack) / (this.workperday * this.workperweek * 52);
        this.hour_rate = add;
        this.per_day = add * this.workperday;
        this.weekly_rate = this.per_day * this.workperweek;
        this.biweek = this.weekly_rate * 2;
        this.monthly_rate = this.biweek * 2;
        this.total_hour_perweek = this.workperday * this.workperweek;

        this.elementError = false;
        this.elementVisible1 = !this.elementVisible1;
        this.elementVisible2 = true;
        this.elementVisible3 = true;
        this.elementVisible4 = true;
        this.elementVisible5 = true;
        this.elementVisible6 = true;
        this.elementVisible7 = false;
      }
    }
    else if (this.selectedOption === this.options[2]) {
      if (this.workperday <= 0 || this.workperweek <= 0 || this.per_hour <= 0) {
        this.elementError = true;
      } else {
        let result = this.per_hour * this.workperday * this.workperweek * 52;
        this.your_annual_package = result;
        this.weekly_rate = this.per_hour * this.workperday * this.workperweek;
        this.biweek = this.weekly_rate * 2;
        this.monthly_rate = this.biweek * 2;

        this.elementError = false;
        this.elementVisible1 = false;
        this.elementVisible2 = false;
        this.elementVisible3 = true;
        this.elementVisible4 = true;
        this.elementVisible5 = true;
        this.elementVisible6 = false;
        this.elementVisible7 = true;
      }
    }
  }


  cancel(): void {

    this.workperday = 0.0
    this.workperweek = 0.0
    this.totalannualpack = 0.0
    this.hour_rate = 0.0
    this.per_day = 0.0;
    this.weekly_rate = 0.0;
    this.biweek = 0.0;
    this.monthly_rate = 0.0;
    this.total_hour_perweek = 0.0;
    this.your_annual_package = 0.0
    this.per_hour = 0.0
    this.elementVisible1 = false;
    this.elementVisible2 = false;
    this.elementVisible3 = false;
    this.elementVisible4 = false;
    this.elementVisible5 = false;
    this.elementVisible6 = false;
    this.elementVisible7 = false;
    this.elementError = false;
  }

  onSelectedOptionChange() {
    //console.log("onSelectedOptionChange() called"); // this code is inspecting purpose in browser to check whether its hitting or not
    if (this.selectedOption === this.options[1]) {
      this.disable1 = true;
      this.disable2 = false;
      this.disable3 = false;
      this.disable4 = false;

    }
    else if (this.selectedOption === this.options[2]) {
      this.disable1 = false;
      this.disable2 = false;
      this.disable3 = false;
      this.disable4 = true;
    }
    else {
      this.disable1 = true;
      this.disable2 = true;
      this.disable3 = true;
      this.disable4 = true;
    }
  }
}
