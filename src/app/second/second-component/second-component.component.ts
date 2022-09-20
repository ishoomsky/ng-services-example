import { Component, OnInit } from '@angular/core';
import { FirstService } from "../../first/first.service";

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {

  constructor(public firstService: FirstService) { }

  ngOnInit(): void {
  }

}
