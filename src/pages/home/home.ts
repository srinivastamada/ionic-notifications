import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController, private localNotifications: LocalNotifications) {
   //this.notification();
  }


notification(){
  let key='';
  console.log("Hello..............................");

  this.localNotifications.schedule({
    id: 1,
    title: 'Notification actions',
    text: 'You clicked notification button. Soon you will get another notification.',
   // sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
    data: { secret: key }
  });

  this.localNotifications.schedule({
    title: 'Delay notification',
    text: 'Mugs for only $3.99 with code MUGOCT. Hurry! Deal ends today.',
    at: new Date(new Date().getTime() + 5000),
    led: 'FF0000',
    sound: null
  });
}



}
