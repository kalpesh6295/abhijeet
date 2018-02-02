import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NewtaskComponent } from './task/newtask.component';
import { DolistComponent } from './task/dolist.component';


@NgModule({
  declarations: [
    AppComponent,
    NewtaskComponent,
    DolistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
