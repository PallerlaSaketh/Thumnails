import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titlt="assignment2";
  main=true;
  thar=false;
  parachute=false;
  forest=false;
  output(num:any){
    this.main=false;
    this.thar=false;
    this.parachute=false;
    this.forest=false;

    if(num==1){
      this.thar=true;
    }
    else if(num==2){
      this.parachute=true;
    }
    else if(num==3){
      this.forest=true
    }
  }
  mainmethod(){
    this.main=true;
    this.thar=false;
    this.parachute=false;
    this.forest=false;
  }
}
