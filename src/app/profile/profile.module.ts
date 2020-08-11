import { NgModule } from '@angular/core';
 import { CommonModule } from '@angular/common';
 import { FormsModule } from '@angular/forms';

 import { IonicModule } from '@ionic/angular';
 import { ProfilePage } from './profile.page';
 import { RouterModule } from '@angular/router';
 import { RatingComponent } from '../rating/rating.component';
 import { ProfilePageRoutingModule } from './profile-routing.module';


 @NgModule({
   imports: [
     CommonModule,
     FormsModule,
     IonicModule,
     RouterModule.forChild([{ path: '', component: ProfilePage }]),
     ProfilePageRoutingModule
   ],
   declarations: [ProfilePage, RatingComponent]
 })
 export class ProfilePageModule {}


//  import { RatingComponent } from '../rating/rating.component';
//  import { Tab3PageRoutingModule } from './tab3-routing.module';

// @NgModule({
//   imports: [
//     IonicModule,
//     CommonModule,
//     FormsModule,
//     ExploreContainerComponentModule,
//     RouterModule.forChild([{ path: '', component: Tab3Page }]),
//     Tab3PageRoutingModule,
//   ],
//   declarations: [Tab3Page, RatingComponent]
// })
// export class Tab3PageModule {}
