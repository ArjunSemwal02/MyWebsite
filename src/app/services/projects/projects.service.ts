import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProjectsData } from '../../../assets/data/allAppData';
import { Projects } from '../../models/Projects';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  // // importing from the appData.json file
  // private projectsData = ProjectsData ;

  // // import from the allProjectsData.ts file
  private projectsData: Projects[] = ProjectsData.projects;

  prjojectDataSubject = new BehaviorSubject<Projects[]>(this.projectsData);
  projectsData$ = this.prjojectDataSubject.asObservable();

  getProjects(): Observable<any> {
    // return of(this.projectsData$);
    return this.projectsData$;
  }
}
