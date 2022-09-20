import { Component, OnInit } from '@angular/core';
import { SecondService } from "../../second/second.service";
import { FirstService } from "../first.service";

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
  providers: [FirstService]
})
export class FirstComponentComponent implements OnInit {

  constructor(public secondService: SecondService) { }

  ngOnInit(): void {
  }

}
