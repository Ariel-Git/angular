import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { SeversComponent } from './severs/severs.component';
/*import { ErrorComponent } from './error_msg/error.component';
import { SuccessComponent } from './success_msg/success.component';*/

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    SeversComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
