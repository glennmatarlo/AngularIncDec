import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  quantity:number=1;
  rndNumber=1;
  plus(){
      this.rndNumber+=Math.floor(Math.random() * 10);
      this.quantity=this.rndNumber;

  }
  minus(){
    this.rndNumber-=Math.floor(Math.random() * 10);
      this.quantity=this.rndNumber;
  }
}
