import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from 'src/app//services/interfaces.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})

export class SettingsPage implements OnInit {

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) { }

  user: User

  ngOnInit() {
    this.getUserData();
  }

  getUserData(){
    this.afAuth.user.subscribe(async res => {
      this.user = res
    })
  }

}
