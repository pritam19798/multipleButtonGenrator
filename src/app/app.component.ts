import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'multipleButtonGenrator';
  sliderValue:number=1;
  button:number[]=[]
  clicked:boolean=false
  ngOnInit(){

  }
  sliderClick(){
    console.log(this.sliderValue)
    this.button=[]
    this.clicked=true
    for (let index = 1; index < this.sliderValue+1; index++) {
      this.button.push(index);
    }
  }
  buttonOnClick(index:number){
    alert(`you clicked ${index}`)
  }
}
