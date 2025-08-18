import { Injectable } from '@angular/core';
import { ProjectsData } from '../../data/allAppData';
import { Observable, of } from 'rxjs';
import { Projects } from '../../models/Projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  appData = '../../data/appData';
  constructor() { }

  // private projectsData = ProjectsData.projects;
  private projectsData= this.appData ;

  getProjects(): Observable<any> {
    return of(this.projectsData);
  }
}
