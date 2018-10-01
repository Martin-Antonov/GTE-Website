import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AnimationVertex} from "./animation-vertex.model";



const NUMBER_OF_POINTS = 50;
const EDGE_DISTANCE = 200;

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})

export class BackgroundComponent implements OnInit {

  private points: Array<AnimationVertex>;

  private ctx: any;

  @ViewChild("animationCanvas") canvasElement: ElementRef;

  constructor() {
  }

  ngOnInit() {
    this.points = [];
    this.canvasElement.nativeElement.width = window.innerWidth;
    this.canvasElement.nativeElement.height = window.innerHeight * 0.85;

    this.ctx = this.canvasElement.nativeElement.getContext("2d");
    for (let i = 0; i < NUMBER_OF_POINTS; i++) {
      this.points.push(new AnimationVertex(this.canvasElement.nativeElement.width, this.canvasElement.nativeElement.height));
    }

    setInterval(() => {
      this.animationUpdate(this.points, this.canvasElement, this.ctx);
    }, 1000 / 60);
  }

  resetAnimation() {
    this.canvasElement.nativeElement.width = window.innerWidth;
    this.canvasElement.nativeElement.height = window.innerHeight * 0.85;
  }

  animationUpdate(points: Array<AnimationVertex>, canvasElement, ctx) {
    ctx.clearRect(0, 0, canvasElement.nativeElement.width, canvasElement.nativeElement.height);
    this.drawLines();
    points.forEach(point => {
      point.update(canvasElement.nativeElement.width, canvasElement.nativeElement.height);
      point.draw(ctx);
    });
  }

  drawLines() {
    for (let i = 0; i < this.points.length; i++) {
      for (let j = i + 1; j < this.points.length; j++) {
        let point1 = this.points[i];
        let point2 = this.points[j];
        let distance = Math.sqrt((point1.x - point2.x) * (point1.x - point2.x) + (point1.y - point2.y) * (point1.y - point2.y));
        if (distance < EDGE_DISTANCE) {

          this.ctx.globalAlpha = 0.6 - 0.6 * distance / 200;
          this.ctx.strokeStyle = "#404040";
          this.ctx.lineWidth = 2;
          this.ctx.beginPath();
          this.ctx.moveTo(point1.x, point1.y);
          this.ctx.lineTo(point2.x, point2.y);
          this.ctx.stroke();
          this.ctx.globalAlpha = 1;
        }
      }
    }
  }
}
