import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class GenderService {

  constructor(private db: AngularFireDatabase) {

   }
   getGender() {
    return this.db.list('gender');
   }
}
