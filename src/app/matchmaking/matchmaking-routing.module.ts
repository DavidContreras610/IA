import { NgModule } from '@angular/core';
 import { Routes, RouterModule } from '@angular/router';

 import { MatchmakingPage } from './matchmaking.page';

 const routes: Routes = [
   {
     path: '',
     component: MatchmakingPage
   }
 ];

 @NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule],
 })
 export class MatchupPageRoutingModule {}