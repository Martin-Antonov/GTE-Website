import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {fadeInAnimation} from "../../animations";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations:[fadeInAnimation],
  host:{'[@fadeInAnimation]':''}
})
export class AboutComponent implements OnInit {

  constructor(public data:DataService) { }

  ngOnInit() {
  }

}
