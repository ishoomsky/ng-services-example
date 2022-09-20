import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondComponentComponent } from './second-component/second-component.component';
import { SecondService } from "./second.service";



@NgModule({
  declarations: [
    SecondComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SecondComponentComponent
  ],
  providers: [SecondService]
})
export class SecondModule { }
