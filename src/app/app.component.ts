import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imgArray = [];

  addImage() {
    for(let i = 0; i < 6; i++){
      const rNum = (Math.floor(Math.random()*6)) + 1;
      if (rNum == 1){
        this.imgArray.push('#666547');
      } else if(rNum == 2){
        this.imgArray.push('#fb2e01');
      } else if(rNum == 3){
        this.imgArray.push('#6fcb9f');
      } else if(rNum == 4){
        this.imgArray.push('#ffe28a');
      } else if(rNum == 5){
        this.imgArray.push('#fffeb3');
      } else {
        this.imgArray.push('#c61f15');
      }
    }
  }

  ngOnInit() {
    this.addImage();
  }
}
