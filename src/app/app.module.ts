import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CardComponent } from './card.component';
import { HelloComponent } from './hello.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FlexLayoutModule, FormsModule, MatSliderModule, MatToolbarModule, MatProgressSpinnerModule],
  declarations: [ AppComponent, CardComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

/*
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }*/