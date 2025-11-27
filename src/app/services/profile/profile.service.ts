import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  myDetails = {
    myName: 'Arjun Semwal',
    myProfile: 'Software Developer',
    myImgUrl: '/pictures/IMG_20241113_172013~.jpg'
  }
  
  constructor() { }
}
