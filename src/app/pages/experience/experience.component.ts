import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experienceList = [
      {
        programme: 'Bachelor of Technology',
        specialization: 'Computer Science and Engineering',
        institution: 'Govind Ballabh Pant Inst. of Eng. and Technology (UTU), Pauri garhwal, Uttarakhand',
        duration: 'Grad. in 2023',
      },
      {
        programme: 'Diploma',
        specialization: 'Information Technology',
        institution: 'Govt. Polytechnic Narendra Nagar (UBTER), Tehri Garhwal, Uttarakhand',
        duration: 'Cmpl. Oct 2020',
      }
    ]
}
