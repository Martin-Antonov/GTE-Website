import {Component, OnInit} from '@angular/core';
import {DataService, MAIN_URL} from '../../../services/data.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-docs-menu',
  templateUrl: './docs-menu.component.html',
  styleUrls: ['./docs-menu.component.scss']
})
export class DocsMenuComponent implements OnInit {
  docsMenu: Object;

  constructor(public data: DataService, private http: HttpClient) {
  }

  ngOnInit() {
    this.getData().subscribe((data) => {
        this.docsMenu = data.docsMenu;
        console.log(this.docsMenu);
      },
      (error) => {
        console.log(error);
      });
  }

  getData(): Observable<any> {
    return this.http.get(MAIN_URL + this.data.docsMenu);
  }
}
