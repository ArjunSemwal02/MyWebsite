import { Component } from '@angular/core';
import { ProjectsComponent } from "../projects/projects.component";
import { ContactComponent } from "../contact/contact.component";
import { ProfileComponent } from '../profile/profile.component';
import { EducationComponent } from '../education/education.component';
import { ExperienceComponent } from "../experience/experience.component";

@Component({
  selector: 'app-home',
  imports: [
    ProfileComponent, 
    EducationComponent, 
    ProjectsComponent, 
    ContactComponent, 
    ExperienceComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
