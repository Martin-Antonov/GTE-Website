import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {fadeInAnimation} from '../../animations';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss'],
  animations: [fadeInAnimation],
  host: {'[@fadeInAnimation]': ''}
})
export class DocsComponent implements OnInit {

  constructor(public dataService: DataService) {
  }

  ngOnInit() {
  }

  scrollSmooth(el) {
    el.scrollIntoView({block: 'start', behavior: 'smooth', inline: 'start'});
  }
}
