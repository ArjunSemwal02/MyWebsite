import { Component, inject } from '@angular/core';
import { ProjectsService } from '../../services/projects/projects.service';
import { Projects } from '../../models/Projects';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-projects',
  imports: [NgxPaginationModule],
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

    // this.items = this.projects$;
  }
}
