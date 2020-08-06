import { NgModule } from '@angular/core';
 import { CommonModule } from '@angular/common';
 import { FormsModule } from '@angular/forms';

 import { IonicModule } from '@ionic/angular';

 import { MatchmakingRoutingModule } from './matchmaking-routing.module';

 import { Matchmaking } from './matchmaking.page';

 @NgModule({
   imports: [
     CommonModule,
     FormsModule,
     IonicModule,
     MatchmakingPageRoutingModule
   ],
   declarations: [Matchmaking]
 })
 export class MatchupPageModule {}
