import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';



import { RatingComponent } from '../rating/rating.component';
 import { Tab3PageRoutingModule } from './tab3-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }]),
    Tab3PageRoutingModule,
  ],
  declarations: [Tab3Page, RatingComponent]
})
export class Tab3PageModule {}

// /* Angular material */
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AngularMaterialModule } from './angular-material.module';
// import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// 
// @NgModule({
//   declarations: [...],
//   imports: [
//     BrowserAnimationsModule,
//     AngularMaterialModule,
//   ],
//   providers: [...],
//   bootstrap: [...],
//   schemas: [CUSTOM_ELEMENTS_SCHEMA]
// })

// export class AppModule { }


// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// @NgModule({
//   declarations: [...],
//   imports: [
//     ReactiveFormsModule,
//     FormsModule
//   ],
//   providers: [...],
//   bootstrap: [...],
//   schemas: [...]
// })

// export class AppModule { }