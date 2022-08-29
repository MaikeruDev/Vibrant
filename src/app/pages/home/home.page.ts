import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public authService: AuthServiceService, private router: Router) {}

  async ngOnInit() {
    this.titleHop();
  }

  async titleHop(){
    const title = document.getElementById('headerTitle')
    const letters = document.getElementsByClassName('letter')

    title?.addEventListener('click', async function onClick() {
      if (title.classList.contains('bounceAnim')) {
        
        
      } else {
        title.classList.add('bounceAnim');
        Array.from(letters).forEach((el) => {
          // Do stuff here
          el.classList.add('bounceAnim');
        });
        await new Promise( resolve => setTimeout(resolve, 2000) );
        title.classList.remove('bounceAnim');
        Array.from(letters).forEach((el) => {
          // Do stuff here
          el.classList.remove('bounceAnim');
        });
      }
    })
  }

  logout(){
    this.authService.signOut()
  }

  goTo(destination){
    this.router.navigateByUrl(destination)
  }

}
