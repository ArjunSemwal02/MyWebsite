import { Component, inject } from '@angular/core';
import { ProjectsService } from '../../services/projects/projects.service';
import { Projects } from '../../models/Projects';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  private projectService = inject(ProjectsService);

  projects$: any;

  ngOnInit() {
    this.projects$ = this.projectService.getProjects();
  }
}
