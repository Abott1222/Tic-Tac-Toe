import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { RowComponent } from './row/row.component';
import { ElementComponent } from './element/element.component';
import {GetStateService} from "./get-state.service";

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    RowComponent,
    ElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GetStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
