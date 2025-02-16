import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ActionListComponent } from './action-list.component';
import { AddActionComponent } from './add-action.component';
import { SustainabilityService } from './sustainability.service';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FormsModule,
    AppComponent,
    ActionListComponent,
    AddActionComponent,
    HttpClientModule
  ],
  providers: [SustainabilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }