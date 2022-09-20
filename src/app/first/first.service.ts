import { Injectable } from '@angular/core';

@Injectable()
export class FirstService {
  random = Math.random();

  constructor() { }

  firstMethod() {
    return 'FIRST: ' + this.random;
  }
}
