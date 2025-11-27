import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocialsService {
  socialLinks = {
    linkedin: "https://www.linkedin.com/in/arjun-semwal-851633201/",
    github: "https://github.com/ArjunSemwal02",
    resume: "/pdf(s)/ResAj (8).pdf"
  }
}
