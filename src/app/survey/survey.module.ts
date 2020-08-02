import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurveyPageRoutingModule } from './survey-routing.module';

import { SurveyPage } from './survey.page';


import {
    MatAutocompleteModule,
} from '@angular/material/autocomplete';


import {
  MatInputModule
} from '@angular/material/input';
  

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurveyPageRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatAutocompleteModule,
    MatInputModule
  ],
  exports: [MatAutocompleteModule,MatInputModule],
  declarations: [SurveyPage]
})
export class SurveyPageModule {}




@NgModule({
    imports: [MatAutocompleteModule,MatInputModule],
    exports: [MatAutocompleteModule,MatInputModule]
})

export class AngularMaterialModule { }

