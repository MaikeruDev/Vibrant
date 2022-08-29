import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from 'src/app/services/interfaces.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.page.html',
  styleUrls: ['./leaderboard.page.scss'],
})
export class LeaderboardPage implements OnInit {

  constructor(private afAuth: AngularFireAuth) { }

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
