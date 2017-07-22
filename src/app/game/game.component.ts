import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  title:string;
  constructor() { }

  ngOnInit() {
    this.title = "Welcome to the game";
  }

}
