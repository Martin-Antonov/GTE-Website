import { Component, OnInit } from '@angular/core';
import {APP_URL, DataService} from "../../services/data.service";
import {fadeInAnimation} from "../../animations";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[fadeInAnimation],
  host:{'[@fadeInAnimation]':''}
})
export class HomeComponent implements OnInit {
  constructor(public data:DataService) {

  }

  ngOnInit() {

  }

  redirect(){
    window.location.href = APP_URL;
  }
}
