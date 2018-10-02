import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  private menus: Array<string>;
  leftMenu: Array<string>;
  rightMenu: Array<string>;

  constructor() {
    this.menus = ['ABOUT', 'DOCS'];
    this.leftMenu = [];
    this.rightMenu = [];
    for (let i = 0; i < this.menus.length / 2; i++) {
      this.leftMenu.push(this.menus[i]);
    }
    for (let i = this.menus.length / 2; i < this.menus.length; i++) {
      this.rightMenu.push(this.menus[i]);
    }
  }

  ngOnInit() {
    window.onscroll = () => {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById('header-menu').style.height = '5%';
      } else {
        document.getElementById('header-menu').style.height = '15%';
      }
    };
  }
}
