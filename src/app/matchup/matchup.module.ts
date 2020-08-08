import { NgModule } from '@angular/core';
 import { CommonModule } from '@angular/common';
 import { FormsModule } from '@angular/forms';

 import { IonicModule } from '@ionic/angular';

 import { MatchupPageRoutingModule } from './matchup-routing.module';

 import { MatchupPage } from './matchup.page';

 @NgModule({
   imports: [
     CommonModule,
     FormsModule,
     IonicModule,
     MatchupPageRoutingModule
   ],
   declarations: [MatchupPage]
 })
 export class MatchupPageModule {}