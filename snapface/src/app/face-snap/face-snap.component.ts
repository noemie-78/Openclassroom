import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  ngOnInit(): void {
  }
  @Input() faceSnap!: FaceSnap;
  
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  image!: string;
  buttonText!: string;

  ngOnInitq() {
    this.title = 'Archibald';
    this.description = 'Mon pote';
    this.createdDate = new Date();
    this.snaps = 0;
    this.image = './assets/img/judy.png';
    this.buttonText = 'oh';
  }

  onSnap() {
    if (this.buttonText == 'oh') {
      this.faceSnap.snaps++;
      this.buttonText = 'oops';
    }
    else {
      this.faceSnap.snaps--;
      this.buttonText = 'oh snap';
    }
    this.snaps++;
  }

}
