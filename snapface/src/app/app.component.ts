import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  ngOnInit() { }
}

  /*ngOnInit() {
    this.mySnap = new FaceSnap(
      'Judy',
      'COucou',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      0,
      'PARIs'
    );
      
  }
  //title = 'snapface';
}*/
