import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { sustentationModule } from './sustentation.module';
import { Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes =[

]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    sustentationModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
