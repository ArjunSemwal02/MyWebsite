import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  educationList = [
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
