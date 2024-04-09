import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { EthModule } from './pages/eth.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, EthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
