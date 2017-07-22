import { Injectable } from '@angular/core';

@Injectable()
export class GetStateService {
  isX:boolean;
  constructor() {
    this.isX = true;
   }

   getFirstState() {
     return true;
   }

   changeState() {
    this.isX = !this.isX;
   }

  getCurrentState() {
    return this.isX;
  }


}
