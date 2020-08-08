import { NgModule } from '@angular/core';
 import { Routes, RouterModule } from '@angular/router';

 import { MatchupPage } from './matchup.page';

 const routes: Routes = [
   {
     path: '',
     component: MatchupPage
   }
 ];

 @NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule],
 })
 export class MatchupPageRoutingModule {}
