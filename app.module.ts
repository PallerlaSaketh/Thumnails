import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TharComponent } from './thar/thar.component';
import { ParachuteComponent } from './parachute/parachute.component';
import { ForestComponent } from './forest/forest.component';

@NgModule({
  declarations: [
    AppComponent,
    TharComponent,
    ParachuteComponent,
    ForestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
