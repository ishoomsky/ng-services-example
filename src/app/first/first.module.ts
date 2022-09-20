import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponentComponent } from './first-component/first-component.component';
import { FirstService } from "./first.service";


@NgModule({
  declarations: [
    FirstComponentComponent
  ],
  exports: [
    FirstComponentComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [FirstService]
})
export class FirstModule { }
