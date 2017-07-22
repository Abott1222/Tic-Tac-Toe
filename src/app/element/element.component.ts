import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {GetStateService} from "../get-state.service";

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {
  //@Output() sendSignal: EventEmitter<any> = new EventEmitter();
  state:boolean;
  

  constructor(private getState:GetStateService) { }

  ngOnInit() {
    this.state = this.getState.getFirstState();
  }


  
  markBox($event) {
    //type EventTarget but cast as HTMLElement
    var toBeChanged = <HTMLScriptElement>event.target;
    this.state = this.getState.getCurrentState();
    if(this.state) {
      toBeChanged.innerHTML = "X";
      this.getState.changeState();
    } else {
      toBeChanged.innerHTML = "O";
      this.getState.changeState();
    }
    //console.log(toBeChanged.classList);
    toBeChanged.style.textAlign = "center";
    toBeChanged.style.fontSize = "600%";
    console.log()
  }
  

}
