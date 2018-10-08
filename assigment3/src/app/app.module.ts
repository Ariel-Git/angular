import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToggleTextComponent } from './toggle-text/toggle-text.component';
import { FortestComponent } from './fortest/fortest.component';

@NgModule({
  declarations: [
    AppComponent,
    ToggleTextComponent,
    FortestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
