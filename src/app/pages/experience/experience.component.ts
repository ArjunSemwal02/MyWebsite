import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  experienceList = [
    {
      programme: 'Software Developer',
      specialization: 'Frontend Developer (Angular)',
      institution:
        'Developing PMS web application for managing protfolios using Angular, TypeScript, RESTful APIs and Tailwind CSS.',
      duration: 'Jan 2025 - Present',
    },
  ];
}
