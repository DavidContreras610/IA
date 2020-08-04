import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatchmakingPageRoutingModule } from './matchmaking-routing.module';

import { MatchmakingPage } from './matchmaking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatchmakingPageRoutingModule
  ],
  declarations: [MatchmakingPage]
})
export class MatchmakingPageModule {}
