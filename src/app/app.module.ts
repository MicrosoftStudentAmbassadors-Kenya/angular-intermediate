import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './home/app.component';
import { ProgamerItemsComponent } from './progamer-items/progamer-items.component';

import { ObjectIteratorPipe } from './shared/pipes/object-iterator.pipe';
import { SearchPipe } from './shared/pipes/search.pipe';
import { ProgamerDetailsComponent } from './progamer-details/progamer-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ObjectIteratorPipe,
    ProgamerItemsComponent,
    SearchPipe,
    ProgamerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
