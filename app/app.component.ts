import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>enter the user values</h1>
           <input [(ngModel)]="myProperty"> 
           <h3>{{ myProperty }}</h3>
           
           <h1> computer values</h1>
           <input [(ngModel)]="values">
           `,
})
export class AppComponent {
  myProperty = '';
  numbers =[1,2,3,4,5,6,7,8,9]
  displayoutput = ""
  shuffleArray(array){
    for(let i=array.length -1;i>0;i--){
      let j=Math.floor(Math.random() * (i+1));
      let temp = array[i];
      array[j] = array[i];
      array[i] = temp;
    }
    return array;
    
  }
  let shuffle = shuffleArray(number).slice(0,4).join('');
}
