import { Injectable } from '@angular/core';

@Injectable()
export class SecondService {
  random = Math.random();

  constructor() { }

  secondMethod() {
    return 'SECOND: ' + this.random;
  }
}
