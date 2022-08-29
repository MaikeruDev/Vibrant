import { Injectable } from '@angular/core';

export interface User {
  uid: string,
  displayName: string,
  email: string,
  photoURL: any
}

@Injectable({
  providedIn: 'root'
})
export class InterfacesService {

  constructor() { }
}

/* UPDATE PFP
(await this.afAuth.currentUser).updateProfile({ photoURL: "https://as2.ftcdn.net/v2/jpg/03/32/59/65/1000_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg" })
        .then(function() { console.log("Updated") })
        .catch(function(error) { console.log(error) }) */