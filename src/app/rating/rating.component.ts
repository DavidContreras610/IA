import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
 import { RouteConfigLoadStart } from '@angular/router';

 @Component({
   selector: 'app-rating',
   templateUrl: './rating.component.html',
   styleUrls: ['./rating.component.scss'],
 })
 export class RatingComponent implements OnInit {

   @Input() rating: number;
   @Output() ratingChange: EventEmitter<number> = new EventEmitter();

   constructor() { }

   rate(index: number) {
     // function used to change the value of our rating
     //triggered when user, clicks a star to change the rating
     this.rating = index;
     this.ratingChange.emit(this.rating);
   }

   getColor(index: number) {
     //function to return the color of the star
     if (this.isAboveRating(index)){
       return COLORS.GREY;
     }
     switch (this.rating){
       case 1:
       case 2:
         return COLORS.RED;
       case 3: 
         return COLORS.YELLOW;
       case 4:
       case 5:
         return COLORS.GREEN;
       default:
         return COLORS.GREY;
     }
   }

   isAboveRating(index: number): boolean{
     return index > this.rating;
   }

   ngOnInit() {}

 }