import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import ProjectsData from '../../../assets/data/appData.json';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  // private projectsData  = '../../data/appData';
  // appData = '../../data/appData';
  // appData = ProjectsData.projects ;

  // private projectsData = ProjectsData.projects;
  // private projectsData = this.appData ;
  private projectsData = ProjectsData ;

  getProjects(): Observable<any> {
    return of(this.projectsData);
  }
}
