import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { HomeComponent } from './home/home.component';

import {MdButtonModule, MdCheckboxModule, MdInputModule, MdTabsModule, 
  MdCardModule, MdExpansionModule, MatStepperModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'questions',
        component: QuestionsComponent
      },
      {
        path: 'home',
        component: HomeComponent
      }
    ]),
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdTabsModule,
    MdCardModule,
    MdExpansionModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
