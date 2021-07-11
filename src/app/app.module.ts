import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent, HiComponent, TestComponent } from './hello.component';
import { AppRoutingModule } from './routing/routing.module';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, HelloComponent, HiComponent, TestComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
