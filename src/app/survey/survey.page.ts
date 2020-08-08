import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

 @Component({
   selector: 'app-survey',
   templateUrl: './survey.page.html',
   styleUrls: ['./survey.page.scss'],
 })
 export class SurveyPage implements OnInit {
  

   constructor( public router: Router
  ) { }

   ngOnInit() {

   }

   goChange() {this.router.navigate(['/tabs/tab1']) 
}

   
   }

//  import { Component, OnInit } from '@angular/core';
//  import { Router } from '@angular/router'
 
//  @Component({
//    selector: 'app-tab3',
//    templateUrl: 'tab3.page.html',
//    styleUrls: ['tab3.page.scss']
//  })
//  export class Tab3Page {
 
//    constructor(
//      public router: Router
//    ) {}
//      goMessages(){
//        this.router.navigate(['/tabs/tab2'])
//      }
 
//  }
 