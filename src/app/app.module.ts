import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import { ShowCharacterComponent } from './character/show-character/show-character.component';
import { AddEditCharacterComponent } from './character/add-edit-character/add-edit-character.component';
import { CharactersheetApiService } from './charactersheet-api.service';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    ShowCharacterComponent,
    AddEditCharacterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CharactersheetApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
