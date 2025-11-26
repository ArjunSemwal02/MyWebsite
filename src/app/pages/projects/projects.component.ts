import { Component, inject } from '@angular/core';
import { ProjectsService } from '../../services/projects/projects.service';
import { Projects } from '../../models/Projects';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [NgxPaginationModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  private projectService = inject(ProjectsService);

  projects$: Projects[] = [];

  // items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);
  // items!: Projects[];
  p: number = 1; // current page number

  ngOnInit() {
    this.projectService.getProjects().subscribe((data: Projects[]) => {
      this.projects$ = data;
    });

    setInterval(() => this.nextSlide(), 5000); // every 5 seconds

    // this.items = this.projects$;
  }

  images: string[] = [
    '/projects-screenshot/Screenshot (31).png',
    '/projects-screenshot/Screenshot (31).png',
    '/projects-screenshot/Screenshot (31).png',
    '/projects-screenshot/Screenshot (31).png',
    '/projects-screenshot/Screenshot (31).png',
  ];

  constructor() {}

  currentIndex = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  viewTemplate(img: string) {
    // const imageName = img.split('/').pop();
    // const nameOnly = imageName?.split('.').slice(0, -1).join('.');
    // this.resumeService.setCurrentTemplate(nameOnly!);
    // this.router.navigate(['/resume-creator'], {
    //   queryParams: { image: nameOnly },
    // });
  }
}
