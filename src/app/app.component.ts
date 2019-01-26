import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-impure-pipes';
  nums =[1, 2, 3, 4];
 
  addNumber(number: number) {    
    this.nums.push(number);
  }

}
