import { Injectable } from '@angular/core';
import { RandomUserProvider } from '../provider/random-user-provider';
  
@Injectable({
  providedIn: 'root'
})
export class RandomUserService {   
  
  constructor(private randomUserProvider: RandomUserProvider) { }


  fetchRandomUsers(): void {
     this.randomUserProvider. fetchRandomUsers();
  }
  
}