import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-information-container',
  templateUrl: './information-container.component.html',
  styleUrls: ['./information-container.component.scss']
})
export class InformationContainerComponent implements OnInit {

  @Input() title:string;
  @Input() content:any;
  isContentText:boolean;

  constructor(private data:DataService) { }

  ngOnInit() {
  }

  checkIsContentText(content:any){
    return typeof(content)=="string";
  }

}
