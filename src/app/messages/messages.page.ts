import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  textInfo: string
  constructor() { }

  ngOnInit() {
  }
sendMessage(){
  var fakeMess = document.getElementById("fakeMessage")
  fakeMess.style.visibility = "visible";
   }
}
